import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { SidebarSkeleton } from './SidebarSkeleton';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Skeleton/SidebarSkeleton',
    component: SidebarSkeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        NewDesignDecorator,
    ],
} as ComponentMeta<typeof SidebarSkeleton>;

const Template: ComponentStory<typeof SidebarSkeleton> = () => <SidebarSkeleton />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    ThemeNewDecorator(ThemeNewStory.LIGHT),
    (Story) => (
        <div style={
            {
                width: '300px',
                background: '#e9f0f6',
            }
        }
        >
            <Story />
        </div>
    ),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeNewDecorator(ThemeNewStory.DARK),
    (Story) => (
        <div style={
            {
                width: '300px',
                background: '#070e33',
            }
        }
        >
            <Story />
        </div>
    ),
];
