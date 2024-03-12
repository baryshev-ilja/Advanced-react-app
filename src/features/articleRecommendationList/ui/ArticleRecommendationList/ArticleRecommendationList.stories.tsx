import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Article, ArticleTypes } from 'entities/article';
// import withMock from 'storybook-addon-mock';
import { ArticleRecommendationList } from './ArticleRecommendationList';

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
    title: 'features/ArticleRecommendationList',
    component: ArticleRecommendationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({}),
        withMock,
        (Story) => <div style={{ padding: 50 }}><Story /></div>,
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