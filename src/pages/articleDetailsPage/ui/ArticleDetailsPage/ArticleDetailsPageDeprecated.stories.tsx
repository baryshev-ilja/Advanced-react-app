import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ArticleDetailsPage from './ArticleDetailsPage';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';
import { articleMock } from '@/shared/mock/articleData';

export default {
    title: 'DEPRECATED/pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({
        articleDetails: {
            data: articleMock,
        },
    })],
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeOldDecorator(ThemeStory.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeOldDecorator(ThemeStory.DARK)];
