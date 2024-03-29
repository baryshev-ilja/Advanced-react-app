import path from 'path';

import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { buildCssLoader } from '../build/loadres/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };

    // config.resolve.modules.push(paths.src);
    // config.resolve?.modules?.push(path.relative(__dirname, '../../src'), 'node_modules');
    // config.resolve.modules = [paths.src, 'node_modules'];
    config!.resolve!.modules!.unshift(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };

    // eslint-disable-next-line no-param-reassign
    const rules = config!.module!.rules as RuleSetRule[];
    config!.module!.rules = rules.map((rule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config!.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config!.module!.rules.push(buildCssLoader(true));

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.ru'),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
};
