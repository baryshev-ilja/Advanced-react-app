module.exports = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-queryparams',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    staticDirs: ['../../public'],
    previewHead: (head) => `
       ${head}
       <style>
         body {
           padding: 0 !important;
         }
       </style>
    `,
};
