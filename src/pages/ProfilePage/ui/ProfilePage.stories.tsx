import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePagePage from './ProfilePage';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePagePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePagePage>;

const Template: ComponentStory<typeof ProfilePagePage> = () => <ProfilePagePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
