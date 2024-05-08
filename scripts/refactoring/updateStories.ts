import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.stories.tsx');

const files = project.getSourceFiles();

const THEME_STORY = 'ThemeStory';

const isTheme = (value?: string) => value === 'Theme';
const isThemeDecorator = (value: string) => value === 'ThemeOldDecorator';
const isDecoratorsProperty = (value: string) => value === 'decorators';

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach((importDeclaration) => {
        const importModules = importDeclaration.getNamedImports();

        const themeModule = importModules.find((module) => module.getNameNode());

        if (isTheme(themeModule?.getName())) {
            themeModule?.setName(THEME_STORY);
        }
    });
});

project.save();
