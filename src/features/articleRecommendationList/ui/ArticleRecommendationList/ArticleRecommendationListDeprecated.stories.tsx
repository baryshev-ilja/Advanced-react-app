import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleRecommendationList } from './ArticleRecommendationList';

import { Article, ArticleTypes } from '@/entities/article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/shared/const/theme';

const articleMock: Article = {
    id: '1',
    title: 'Javascript news from America',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    user: {
        id: '1',
        username: 'user user',
        avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    },
    createdAt: '26.02.2022',
    type: [ArticleTypes.IT, ArticleTypes.VACANCIES],
    blocks: [],
};

export default {
    title: 'DEPRECATED/features/ArticleRecommendationList',
    component: ArticleRecommendationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({}),
        ThemeDecorator(ThemeStory.LIGHT),
    ],
} as ComponentMeta<typeof ArticleRecommendationList>;

const Template: ComponentStory<typeof ArticleRecommendationList> = (args) => <ArticleRecommendationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_limit=4`,
            method: 'GET',
            status: 200,
            response: [
                { ...articleMock, id: '1' },
                { ...articleMock, id: '2' },
                { ...articleMock, id: '3' },
            ],
        },
    ],
};
