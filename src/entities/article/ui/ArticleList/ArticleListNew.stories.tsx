import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ArticleList } from './ArticleList';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';
import { articleMock } from '@/shared/mock/articleData';

import cls from './ArticleList.module.scss';

export default {
    title: 'REDESIGNED/entities/article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof ArticleList>;

const articlesMock = new Array(9).fill(0).map((item, index) => ({
    ...articleMock,
    id: String(index),
}));

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const NormalGrid = Template.bind({});
NormalGrid.args = {
    articles: articlesMock,
    view: 'GRID',
    className: cls.articleList,
    isLoading: false,
};
NormalGrid.decorators = [
    ThemeNewDecorator(ThemeNewStory.LIGHT),
    (Story) => (
        <div style={
            {
                width: '1000px',
                background: '#e9f0f6',
            }
        }
        >
            <Story />
        </div>
    ),
];

export const DarkGrid = Template.bind({});
DarkGrid.args = {
    articles: articlesMock,
    view: 'GRID',
    className: cls.articleList,
    isLoading: false,
};
DarkGrid.decorators = [
    ThemeNewDecorator(ThemeNewStory.DARK),
    (Story) => (
        <div style={
            {
                width: '1000px',
                background: '#070e33',
            }
        }
        >
            <Story />
        </div>
    ),
];

export const NormalGridIsLoading = Template.bind({});
NormalGridIsLoading.args = {
    articles: [],
    view: 'GRID',
    className: cls.articleList,
    isLoading: true,
};
NormalGridIsLoading.decorators = [
    ThemeNewDecorator(ThemeNewStory.LIGHT),
    (Story) => (
        <div style={
            {
                width: '1000px',
                background: '#e9f0f6',
            }
        }
        >
            <Story />
        </div>
    ),
];

export const DarkGridIsLoading = Template.bind({});
DarkGridIsLoading.args = {
    articles: [],
    view: 'GRID',
    className: cls.articleList,
    isLoading: true,
};
DarkGridIsLoading.decorators = [
    ThemeNewDecorator(ThemeNewStory.DARK),
    (Story) => (
        <div style={
            {
                width: '1000px',
                background: '#070e33',
            }
        }
        >
            <Story />
        </div>
    ),
];

export const NormalList = Template.bind({});
NormalList.args = {
    articles: articlesMock,
    view: 'LIST',
    className: cls.articleList,
    isLoading: false,
};
NormalList.decorators = [
    ThemeNewDecorator(ThemeNewStory.LIGHT),
    (Story) => (
        <div style={
            {
                width: '1000px',
                background: '#e9f0f6',
            }
        }
        >
            <Story />
        </div>
    ),
];

export const DarkList = Template.bind({});
DarkList.args = {
    articles: articlesMock,
    view: 'LIST',
    className: cls.articleList,
    isLoading: false,
};
DarkList.decorators = [
    ThemeNewDecorator(ThemeNewStory.DARK),
    (Story) => (
        <div style={
            {
                width: '1000px',
                background: '#070e33',
            }
        }
        >
            <Story />
        </div>
    ),
];

export const NormalListIsLoading = Template.bind({});
NormalListIsLoading.args = {
    articles: [],
    view: 'LIST',
    className: cls.articleList,
    isLoading: true,
};
NormalListIsLoading.decorators = [
    ThemeNewDecorator(ThemeNewStory.LIGHT),
    (Story) => (
        <div style={
            {
                width: '1000px',
                background: '#e9f0f6',
            }
        }
        >
            <Story />
        </div>
    ),
];

export const DarkListIsLoading = Template.bind({});
DarkListIsLoading.args = {
    articles: [],
    view: 'LIST',
    className: cls.articleList,
    isLoading: true,
};
DarkListIsLoading.decorators = [
    ThemeNewDecorator(ThemeNewStory.DARK),
    (Story) => (
        <div style={
            {
                width: '1000px',
                background: '#070e33',
            }
        }
        >
            <Story />
        </div>
    ),
];
