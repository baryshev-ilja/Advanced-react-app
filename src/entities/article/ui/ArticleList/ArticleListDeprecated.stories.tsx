import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ArticleList } from './ArticleList';

import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';
import { articleMock } from '@/shared/mock/articleData';

import cls from './ArticleList.module.scss';

export default {
    title: 'DEPRECATED/entities/article/ArticleList',
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
NormalGrid.decorators = [ThemeOldDecorator(ThemeStory.LIGHT)];

export const DarkGrid = Template.bind({});
DarkGrid.args = {
    articles: articlesMock,
    view: 'GRID',
    className: cls.articleList,
    isLoading: false,
};
DarkGrid.decorators = [ThemeOldDecorator(ThemeStory.DARK)];

export const NormalGridIsLoading = Template.bind({});
NormalGridIsLoading.args = {
    articles: [],
    view: 'GRID',
    className: cls.articleList,
    isLoading: true,
};
NormalGridIsLoading.decorators = [ThemeOldDecorator(ThemeStory.LIGHT)];

export const DarkGridIsLoading = Template.bind({});
DarkGridIsLoading.args = {
    articles: [],
    view: 'GRID',
    className: cls.articleList,
    isLoading: true,
};
DarkGridIsLoading.decorators = [ThemeOldDecorator(ThemeStory.DARK)];

export const NormalList = Template.bind({});
NormalList.args = {
    articles: articlesMock,
    view: 'LIST',
    className: cls.articleList,
    isLoading: false,
};
NormalList.decorators = [ThemeOldDecorator(ThemeStory.LIGHT)];

export const DarkList = Template.bind({});
DarkList.args = {
    articles: articlesMock,
    view: 'LIST',
    className: cls.articleList,
    isLoading: false,
};
DarkList.decorators = [ThemeOldDecorator(ThemeStory.DARK)];

export const NormalListIsLoading = Template.bind({});
NormalListIsLoading.args = {
    articles: [],
    view: 'LIST',
    className: cls.articleList,
    isLoading: true,
};
NormalListIsLoading.decorators = [ThemeOldDecorator(ThemeStory.LIGHT)];

export const DarkListIsLoading = Template.bind({});
DarkListIsLoading.args = {
    articles: [],
    view: 'LIST',
    className: cls.articleList,
    isLoading: true,
};
DarkListIsLoading.decorators = [ThemeOldDecorator(ThemeStory.DARK)];
