import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
    },
})];

export const LightWithError = Template.bind({});
LightWithError.args = {
};
LightWithError.decorators = [StoreDecorator({
    loginForm: {
        username: 'admindfgdf',
        password: '123grfg',
        error: 'Неправильно введен логин или пароль',
    },
})];

export const LightLoading = Template.bind({});
LightLoading.args = {
};
LightLoading.decorators = [StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
        isLoading: true,
    },
})];
