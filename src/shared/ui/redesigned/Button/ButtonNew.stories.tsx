import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Кнопка',
    variant: 'primary',
};
Primary.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    children: 'Кнопка',
    variant: 'primary',
    disabled: true,
};
PrimaryDisabled.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const Auth = Template.bind({});
Auth.args = {
    children: 'Кнопка',
    variant: 'auth',
};
Auth.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const AuthDisabled = Template.bind({});
AuthDisabled.args = {
    children: 'Кнопка',
    variant: 'auth',
    disabled: true,
};
AuthDisabled.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const Select = Template.bind({});
Select.args = {
    children: 'Кнопка',
    variant: 'select',
};
Select.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const ThemeSwitcher = Template.bind({});
ThemeSwitcher.args = {
    children: 'Кнопка',
    variant: 'themeSwitcher',
};
ThemeSwitcher.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const viewSwitcher = Template.bind({});
viewSwitcher.args = {
    children: 'Кнопка',
    variant: 'viewSwitcher',
};
viewSwitcher.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const errorValidation = Template.bind({});
errorValidation.args = {
    children: 'Кнопка',
    variant: 'errorValidation',
};
errorValidation.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const userName = Template.bind({});
userName.args = {
    children: 'Кнопка',
    variant: 'userName',
};
userName.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];
