import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { articleMock } from 'shared/mock/articleData';
import ArticlesPage from './ArticlesPage';

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
Normal.decorators = [StoreDecorator({
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
NormalIsLoading.decorators = [StoreDecorator({
    articlesPage: {
        ids: [],
        entities: {},
        isLoading: true,
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
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
DarkIsLoading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    articlesPage: {
        ids: [],
        entities: {},
        isLoading: true,
    },
})];
