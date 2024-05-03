import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Skeleton } from './Skeleton';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    width: '100%',
    height: 50,
};
Normal.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const Circle = Template.bind({});
Circle.args = {
    width: 300,
    height: 300,
    borderRadius: '50%',
};
Circle.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const NormalDark = Template.bind({});
NormalDark.args = {
    width: '100%',
    height: 50,
};
NormalDark.decorators = [ThemeDecorator(ThemeStory.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    width: 300,
    height: 300,
    borderRadius: '50%',
};
CircleDark.decorators = [ThemeDecorator(ThemeStory.DARK)];
