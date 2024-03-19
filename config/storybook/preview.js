import { addDecorator } from '@storybook/react';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator';
import { WrapperDecorator } from '../../src/shared/config/storybook/WrapperDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['app', Theme.LIGHT], color: '#e0e0e0' },
            { name: 'dark', class: ['app', Theme.DARK], color: '#161637' },
            { name: 'gray', class: ['app', Theme.GRAY], color: '#f4f7fb' },
        ],
    },
};

addDecorator(WrapperDecorator());
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
