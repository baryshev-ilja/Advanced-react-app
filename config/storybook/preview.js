import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator';
import { WrapperDecorator } from '../../src/shared/config/storybook/WrapperDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

// addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);
addDecorator(WrapperDecorator());
