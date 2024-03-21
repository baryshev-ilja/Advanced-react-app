import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ArticlesPage from './ArticlesPage';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/shared/const/theme';
import { articleMock } from '@/shared/mock/articleData';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeDecorator(ThemeStory.LIGHT), StoreDecorator({
    articlesPage: {
        ids: ['1', '2', '3'],
        entities: {
            1: {
                ...articleMock,
                id: '1',
            },
            2: {
                ...articleMock,
                id: '2',
            },
            3: {
                ...articleMock,
                id: '3',
            },
        },
    },
})];

export const NormalIsLoading = Template.bind({});
NormalIsLoading.args = {};
NormalIsLoading.decorators = [ThemeDecorator(ThemeStory.LIGHT), StoreDecorator({
    articlesPage: {
        ids: [],
        entities: {},
        isLoading: true,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeStory.DARK), StoreDecorator({
    articlesPage: {
        ids: ['1', '2', '3'],
        entities: {
            1: {
                ...articleMock,
                id: '1',
            },
            2: {
                ...articleMock,
                id: '2',
            },
            3: {
                ...articleMock,
                id: '3',
            },
        },
    },
})];

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = {};
DarkIsLoading.decorators = [ThemeDecorator(ThemeStory.DARK), StoreDecorator({
    articlesPage: {
        ids: [],
        entities: {},
        isLoading: true,
    },
})];
