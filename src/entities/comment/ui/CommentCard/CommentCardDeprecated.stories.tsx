import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CommentCard } from './CommentCard';

import { FeatureFlagsDecorator } from '@/shared/config/storybook/FatureFlagsDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeNewStory, ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

const args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    },
};

export const Normal = Template.bind({});
Normal.args = args;
Normal.decorators = [ThemeOldDecorator(ThemeStory.LIGHT)];

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = args;
NormalRedesigned.decorators = [
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeNewDecorator(ThemeNewStory.WHITE),
];

export const Dark = Template.bind({});
Dark.args = args;
Dark.decorators = [ThemeOldDecorator(ThemeStory.DARK)];
