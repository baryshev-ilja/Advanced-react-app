import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ArticleListItemRedesignedSkeleton } from './ArticleListItemRedesignedSkeleton';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Skeleton/ArticleListItemRedesignedSkeleton',
    component: ArticleListItemRedesignedSkeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof ArticleListItemRedesignedSkeleton>;

const Template: ComponentStory<typeof ArticleListItemRedesignedSkeleton> = (args) => <ArticleListItemRedesignedSkeleton {...args} />;

export const LightList = Template.bind({});
LightList.args = {
    view: 'LIST',
};
LightList.decorators = [
    ThemeNewDecorator(ThemeNewStory.LIGHT),
    (Story) => (
        <div style={
            {
                width: '800px',
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
    view: 'LIST',
};
DarkList.decorators = [
    ThemeNewDecorator(ThemeNewStory.DARK),
    (Story) => (
        <div style={
            {
                width: '800px',
                background: '#070e33',
            }
        }
        >
            <Story />
        </div>
    ),
];
