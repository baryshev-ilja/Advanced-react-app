import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { AppImage } from './AppImage';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator(ThemeStory.LIGHT)],
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
