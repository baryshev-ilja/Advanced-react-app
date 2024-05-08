import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CommentForm } from './CommentForm';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/entities/Comment/CommentForm',
    component: CommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof CommentForm>;

const Template: ComponentStory<typeof CommentForm> = (args) => <CommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];
