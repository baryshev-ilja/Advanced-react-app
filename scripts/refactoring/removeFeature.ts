import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example isCounterEnabled
const featureState = process.argv[3]; // example on/off

if (!removedFeatureName) {
    throw new Error('Вы не указали первым параметром название фичи!');
}

if (!featureState) {
    throw new Error('Обязательно нужно указать второй аргумент (on или off)');
}

if (featureState !== 'on' && featureState !== 'off') {
    throw new Error('Второй аргумент может быть только on или off!');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isToggleFeature = (node: Node) => {
    let isFeature = false;
    node.forEachChild((child) => {
        if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeature') {
            isFeature = true;
        }
    });
    return isFeature;
};

files.forEach((sourceFile) => {
    sourceFile.forEachDescendant((node: Node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFeature(node)) {
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
        }
    });
});

project.save();
