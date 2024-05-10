import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Skeleton } from './Skeleton';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        NewDesignDecorator,
    ],
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const LightSquare = Template.bind({});
LightSquare.args = {
    width: 450,
    height: 50,
    borderRadius: '8px',
};
LightSquare.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];

export const LightCircle = Template.bind({});
LightCircle.args = {
    width: 300,
    height: 300,
    borderRadius: '50%',
};
LightCircle.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];

export const DarkSquare = Template.bind({});
DarkSquare.args = {
    width: 450,
    height: 50,
    borderRadius: '8px',
};
DarkSquare.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];

export const DarkCircle = Template.bind({});
DarkCircle.args = {
    width: 300,
    height: 300,
    borderRadius: '50%',
};
DarkCircle.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];
