import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { MainLayoutSkeletons } from './MainLayoutSkeletons';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Skeleton/MainLayoutSkeletons',
    component: MainLayoutSkeletons,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof MainLayoutSkeletons>;

const Template: ComponentStory<typeof MainLayoutSkeletons> = () => <MainLayoutSkeletons />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];
