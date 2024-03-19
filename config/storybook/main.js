module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },

        },
        '@storybook/addon-interactions',
        '@storybook/addon-queryparams',
        'storybook-addon-mock/register',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    staticDirs: ['../../public'],
    //    previewHead: (head) => `
    //    ${head}
    //    <style>
    //      body {
    //        padding: 0 !important;
    //      }
    //    </style>
    // `,
};
