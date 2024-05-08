import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import AddCommentsForArticle from './AddCommentsForArticle';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/features/AddCommentsForArticle',
    component: AddCommentsForArticle,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof AddCommentsForArticle>;

const Template: ComponentStory<typeof AddCommentsForArticle> = (args) => <AddCommentsForArticle {...args} />;

export const Light = Template.bind({});
Light.args = {
    id: '1',
};
Light.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
        articleComments: {
            comments: {
                isLoading: false,
                ids: ['1'],
                entities: {
                    1: {
                        id: '1',
                        text: 'hello world',
                        user: { id: '1', username: 'Vasya' },
                    },
                },
            },
        },
    }),
    ThemeNewDecorator(ThemeNewStory.WHITE),
];
