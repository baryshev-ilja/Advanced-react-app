import { Node, Project, SyntaxKind } from 'ts-morph';

import {
    featureState,
    removedFeatureName,
    isToggleComponent,
    isToggleFunction,
    replaceComponentToggleFeatures,
    replaceFunctionToggleFeatures,
} from './common';

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

files.forEach((sourceFile) => {
    // eslint-disable-next-line consistent-return
    sourceFile.forEachDescendant((node: Node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            return replaceFunctionToggleFeatures(node);
        }

        if (node.isKind(SyntaxKind.JsxSelfClosingElement) && isToggleComponent(node)) {
            return replaceComponentToggleFeatures(node);
        }
    });
});

project.save();
