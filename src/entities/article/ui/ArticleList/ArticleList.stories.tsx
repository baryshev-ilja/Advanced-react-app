import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { articleMock } from '@/shared/mock/articleData';
import { ArticleList } from './ArticleList';
import cls from './ArticleList.module.scss';
import { ThemeStory } from '@/shared/const/theme';

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
NormalGrid.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const DarkGrid = Template.bind({});
DarkGrid.args = {
    articles: articlesMock,
    view: 'GRID',
    className: cls.articleList,
    isLoading: false,
};
DarkGrid.decorators = [ThemeDecorator(ThemeStory.DARK)];

export const NormalGridIsLoading = Template.bind({});
NormalGridIsLoading.args = {
    articles: [],
    view: 'GRID',
    className: cls.articleList,
    isLoading: true,
};
NormalGridIsLoading.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const DarkGridIsLoading = Template.bind({});
DarkGridIsLoading.args = {
    articles: [],
    view: 'GRID',
    className: cls.articleList,
    isLoading: true,
};
DarkGridIsLoading.decorators = [ThemeDecorator(ThemeStory.DARK)];

export const NormalList = Template.bind({});
NormalList.args = {
    articles: articlesMock,
    view: 'LIST',
    className: cls.articleList,
    isLoading: false,
};
NormalList.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const DarkList = Template.bind({});
DarkList.args = {
    articles: articlesMock,
    view: 'LIST',
    className: cls.articleList,
    isLoading: false,
};
DarkList.decorators = [ThemeDecorator(ThemeStory.DARK)];

export const NormalListIsLoading = Template.bind({});
NormalListIsLoading.args = {
    articles: [],
    view: 'LIST',
    className: cls.articleList,
    isLoading: true,
};
NormalListIsLoading.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const DarkListIsLoading = Template.bind({});
DarkListIsLoading.args = {
    articles: [],
    view: 'LIST',
    className: cls.articleList,
    isLoading: true,
};
DarkListIsLoading.decorators = [ThemeDecorator(ThemeStory.DARK)];
