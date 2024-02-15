import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
    const cssNameReformation = (name: string): string => {
        const blockAndElement = /_{2}/g;
        const elementAndModification = /-{2}/g;
        const camelCase = /-(\w)/g;

        return name
            .replace(blockAndElement, '_')
            .replace(elementAndModification, '__')
            .replace(camelCase, (match) => match.charAt(1).toUpperCase());
    };

    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:6]',
                        exportLocalsConvention: (name: string) => cssNameReformation(name),
                    },
                },
            },
            'sass-loader',
        ],
    };
}
