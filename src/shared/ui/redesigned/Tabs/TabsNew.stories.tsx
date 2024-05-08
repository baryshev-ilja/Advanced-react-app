import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Tabs } from './Tabs';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab 1',
        },
        {
            value: 'tab 2',
            content: 'tab 2',
        },
        {
            value: 'tab 3',
            content: 'tab 3',
        },
    ],
    currentValue: 'tab 1',
    onTabClick: action('onTabClick'),
};
Normal.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const Dark = Template.bind({});
Dark.args = {
    tabs: [
        {
            value: 'tab 1',
            content: 'tab 1',
        },
        {
            value: 'tab 2',
            content: 'tab 2',
        },
        {
            value: 'tab 3',
            content: 'tab 3',
        },
    ],
    currentValue: 'tab 1',
    onTabClick: action('onTabClick'),
};
Dark.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];
