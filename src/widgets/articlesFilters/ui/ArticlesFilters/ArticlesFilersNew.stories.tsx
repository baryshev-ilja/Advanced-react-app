import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ArticlesFilters } from './ArticlesFilters';

import { ArticleSortTypes } from '@/entities/article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';
import { TypesOfOrders } from '@/shared/types/orderTypes';

export default {
    title: 'REDESIGNED/widgets/ArticlesFilters',
    component: ArticlesFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => <ArticlesFilters {...args} />;

const args = {
    view: 'LIST',
    sort: ArticleSortTypes.TITLE,
    order: 'asc' as TypesOfOrders,
    search: '',
    type: 'IT',
    typesTabs: [
        {
            value: 'Все статьи',
            content: 'Все статьи',
        },
        {
            value: 'IT',
            content: 'IT',
        },
        {
            value: 'Вакансии',
            content: 'Вакансии',
        },
        {
            value: 'Наука',
            content: 'Наука',
        },
    ],
    onClickView: action('onClickView'),
    onChangeSort: action('onChangeSort'),
    onChangeOrder: action('onChangeOrder'),
    onTabClick: action('onTabClick'),
    onChangeSearch: action('onChangeSearch'),
};

export const Light = Template.bind({});
Light.args = args;
Light.decorators = [
    (Story) => (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '300px',
                background: '#e9f0f6',
            }
        }
        >
            <Story />
        </div>
    ),
    ThemeNewDecorator(ThemeNewStory.LIGHT),
];

export const Dark = Template.bind({});
Dark.args = args;
Dark.decorators = [
    (Story) => (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '300px',
                background: '#070e33',
            }
        }
        >
            <Story />
        </div>
    ),
    ThemeNewDecorator(ThemeNewStory.DARK),
];
