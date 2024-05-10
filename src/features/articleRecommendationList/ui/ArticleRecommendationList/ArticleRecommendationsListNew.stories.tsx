import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticleRecommendationList } from './ArticleRecommendationList';

import { Article, ArticleTypes } from '@/entities/article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

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
    title: 'REDESIGNED/features/ArticleRecommendationList',
    component: ArticleRecommendationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({}),
        NewDesignDecorator,
        (Story) => (
            <div style={
                {
                    width: '750px',
                    background: '#e9f0f6',
                }
            }
            >
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ArticleRecommendationList>;

const Template: ComponentStory<typeof ArticleRecommendationList> = (args) => <ArticleRecommendationList {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.parameters = {
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
Light.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = {
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
Dark.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];
