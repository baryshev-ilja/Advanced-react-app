import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

export function buildPlugins(props: BuildOptions): webpack.WebpackPluginInstance[] {
    const {
        paths,
        isDev,
        analyze,
        apiUrl,
        project,
    } = props;

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),
    ];

    if (isDev) {
        plugins.push(
            new ReactRefreshPlugin({ overlay: false }),
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: true,
            }),
        );
    }

    if (!isDev) {
        plugins.push(
            new CopyPlugin({
                patterns: [
                    { from: paths.locales, to: paths.buildLocales },
                ],
            }),
        );
    }

    if (analyze) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}
