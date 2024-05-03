import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Loader } from './Loader';

import { LoaderDecorator } from '@/shared/config/storybook/LoaderDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [LoaderDecorator(), ThemeDecorator(ThemeStory.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [LoaderDecorator(), ThemeDecorator(ThemeStory.DARK)];
