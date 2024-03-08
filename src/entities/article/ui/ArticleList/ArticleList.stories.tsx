import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { articleMock } from 'shared/mock/articleData';
import { ArticleList } from './ArticleList';
import cls from './ArticleList.module.scss';

export default {
    title: 'entities/article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
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

export const DarkGrid = Template.bind({});
DarkGrid.args = {
    articles: articlesMock,
    view: 'GRID',
    className: cls.articleList,
    isLoading: false,
};
DarkGrid.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalGridIsLoading = Template.bind({});
NormalGridIsLoading.args = {
    articles: articlesMock,
    view: 'GRID',
    className: cls.articleList,
    isLoading: true,
};

export const DarkGridIsLoading = Template.bind({});
DarkGridIsLoading.args = {
    articles: articlesMock,
    view: 'GRID',
    className: cls.articleList,
    isLoading: true,
};
DarkGridIsLoading.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalList = Template.bind({});
NormalList.args = {
    articles: articlesMock,
    view: 'LIST',
    className: cls.articleList,
    isLoading: false,
};

export const DarkList = Template.bind({});
DarkList.args = {
    articles: articlesMock,
    view: 'LIST',
    className: cls.articleList,
    isLoading: false,
};
DarkList.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalListIsLoading = Template.bind({});
NormalListIsLoading.args = {
    articles: articlesMock,
    view: 'LIST',
    className: cls.articleList,
    isLoading: true,
};

export const DarkListIsLoading = Template.bind({});
DarkListIsLoading.args = {
    articles: articlesMock,
    view: 'LIST',
    className: cls.articleList,
    isLoading: true,
};
DarkListIsLoading.decorators = [ThemeDecorator(Theme.DARK)];
