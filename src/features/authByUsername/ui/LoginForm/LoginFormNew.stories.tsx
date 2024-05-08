import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import LoginForm from './LoginForm';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        NewDesignDecorator,
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
    ],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    }),
    ThemeNewDecorator(ThemeNewStory.DARK),
];

export const DarkWithError = Template.bind({});
DarkWithError.args = {};
DarkWithError.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'admindfgdf',
            password: '123grfg',
            error: 'Неправильно введен логин или пароль',
        },
    }),
    ThemeNewDecorator(ThemeNewStory.DARK),
];
