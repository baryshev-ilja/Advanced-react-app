import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const pathUI = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedPathUI = project.getDirectory(pathUI);

const componentsFromUIDir = sharedPathUI?.getDirectories();

componentsFromUIDir?.forEach((directory) => {
    const indexPath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexPath);

    if (!indexFile) {
        const indexExportString = `export * from './${directory.getBaseName()}';`;
        const file = directory.createSourceFile(indexPath, indexExportString, { overwrite: true });

        file.save();
    }
});

const isAbsolute = (value: string) => {
    const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];
    return layers.some((layer) => value.startsWith(layer));
};

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach((importDeclaration) => {
        const valueOfPath = importDeclaration.getModuleSpecifierValue();
        const valueOfPathWithoutAlias = valueOfPath.replace('@/', '');

        const segments = valueOfPathWithoutAlias.split('/');

        const isSharedLayer = segments?.[0] === 'shared';
        const isUISlice = segments?.[1] === 'ui';

        if (isAbsolute(valueOfPathWithoutAlias) && isSharedLayer && isUISlice) {
            const result = valueOfPathWithoutAlias.split('/').slice(0, 3).join('/');

            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
