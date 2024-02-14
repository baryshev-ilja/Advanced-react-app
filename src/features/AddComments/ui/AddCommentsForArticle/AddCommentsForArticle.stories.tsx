import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AddCommentsForArticle from './AddCommentsForArticle';

export default {
    title: 'shared/AddCommentsForArticle',
    component: AddCommentsForArticle,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentsForArticle>;

const Template: ComponentStory<typeof AddCommentsForArticle> = (args) => <AddCommentsForArticle {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
