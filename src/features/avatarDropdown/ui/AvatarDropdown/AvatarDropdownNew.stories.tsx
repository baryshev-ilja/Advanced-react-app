import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { AvatarDropdown } from './AvatarDropdown';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        }),
        NewDesignDecorator,
    ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    ThemeNewDecorator(ThemeNewStory.LIGHT),
    (Story) => (
        <div style={
            {
                display: 'flex',
                justifyContent: 'flex-end',
                width: '400px',
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
                display: 'flex',
                justifyContent: 'flex-end',
                width: '400px',
                background: '#070e33',
            }
        }
        >
            <Story />
        </div>
    ),
];
