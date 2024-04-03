import { JsxAttribute, Node, SyntaxKind } from 'ts-morph';

export const removedFeatureName = process.argv[2]; // example isCounterEnabled
export const featureState = process.argv[3]; // example on/off

const toggleFeaturesFunctionName = 'toggleFeatures';
const toggleFeaturesComponentName = 'ToggleFeatures';

// Функция, которая забирает значение из атрибута в компоненте
export const getReplacedComponent = (attribute?: JsxAttribute) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();

    if (value?.startsWith('(')) {
        return value.slice(1, -1);
    }

    return value;
};

// Функция для получения атрибута по его названию
const getAttributeNodeByName = (
    jsxAttributes: JsxAttribute[],
    name: string,
) => {
    return jsxAttributes.find((attribute) => attribute.getName() === name);
};

// Функция для выпиливания/добавления фич через компонент
export const replaceComponentToggleFeatures = (node: Node) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const onAttribute = getAttributeNodeByName(attributes, 'on');
    const offAttribute = getAttributeNodeByName(attributes, 'off');
    const featureNameAttribute = getAttributeNodeByName(attributes, 'name');
    const featureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getLiteralValue();

    if (featureName !== removedFeatureName) return;

    const onValue = getReplacedComponent(onAttribute);
    const offValue = getReplacedComponent(offAttribute);

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue);
    }

    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue);
    }
};

// Проверка, это компонент для переключения фич или нет?
export const isToggleComponent = (node: Node) => {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

    return identifier?.getText() === toggleFeaturesComponentName;
};

// Проверка, это функция для переключения фич или нет?
export const isToggleFunction = (node: Node) => {
    let isFeature = false;
    node.forEachChild((child) => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === toggleFeaturesFunctionName) {
            isFeature = true;
        }
    });
    return isFeature;
};

// Функция для выпиливания/добавления фич через функцию
export const replaceFunctionToggleFeatures = (node: Node) => {
    const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

    if (!objectOptions) return;

    const nameFeatureProperty = objectOptions.getProperty('name');
    const onFeatureProperty = objectOptions.getProperty('on');
    const offFeatureProperty = objectOptions.getProperty('off');

    const onFunction = onFeatureProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
    const offFunction = offFeatureProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
    const featureName = nameFeatureProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

    if (removedFeatureName !== featureName) return;

    if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
        console.log(`Фича ${removedFeatureName} успешно внедрена в проект!`);
    }

    if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBodyText() ?? '');
        console.log(`Фича ${removedFeatureName} успешно выпилена из проекта!`);
    }
};
