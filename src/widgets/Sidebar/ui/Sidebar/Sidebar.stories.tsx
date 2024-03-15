import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(ThemeStory.LIGHT), StoreDecorator({
    user: { authData: {} },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeStory.DARK), StoreDecorator({
    user: { authData: {} },
})];

export const NoAuthLight = Template.bind({});
NoAuthLight.args = {};
NoAuthLight.decorators = [ThemeDecorator(ThemeStory.LIGHT), StoreDecorator({
    user: {},
})];

export const NoAuthDark = Template.bind({});
NoAuthDark.args = {};
NoAuthDark.decorators = [ThemeDecorator(ThemeStory.DARK), StoreDecorator({
    user: {},
})];
