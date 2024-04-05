import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Icon } from './Icon';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator(ThemeStory.LIGHT)],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
