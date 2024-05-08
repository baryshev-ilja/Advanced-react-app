import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CommentCard } from './CommentCard';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

const args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    },
};

export const Light = Template.bind({});
Light.args = args;
Light.decorators = [
    ThemeNewDecorator(ThemeNewStory.WHITE),
];

export const Dark = Template.bind({});
Dark.args = args;
Dark.decorators = [
    ThemeNewDecorator(ThemeNewStory.DARK),
];
