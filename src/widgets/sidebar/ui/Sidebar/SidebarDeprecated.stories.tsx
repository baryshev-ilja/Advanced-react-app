import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Sidebar } from './Sidebar';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeOldDecorator(ThemeStory.LIGHT), StoreDecorator({
    user: { authData: {} },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeOldDecorator(ThemeStory.DARK), StoreDecorator({
    user: { authData: {} },
})];

export const NoAuthLight = Template.bind({});
NoAuthLight.args = {};
NoAuthLight.decorators = [ThemeOldDecorator(ThemeStory.LIGHT), StoreDecorator({
    user: {},
})];

export const NoAuthDark = Template.bind({});
NoAuthDark.args = {};
NoAuthDark.decorators = [ThemeOldDecorator(ThemeStory.DARK), StoreDecorator({
    user: {},
})];
