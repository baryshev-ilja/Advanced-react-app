export type BuildMode = 'production' | 'development'

type BuildAnalyze = boolean;

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    analyze: BuildAnalyze;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    analyze: BuildAnalyze;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
}
