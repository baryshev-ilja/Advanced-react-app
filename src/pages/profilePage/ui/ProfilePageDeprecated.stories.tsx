import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ProfilePagePage from './ProfilePage';

import { Country } from '@/entities/country';
import { Currency } from '@/entities/currency';
import AvatarImg from '@/shared/assets/storybook.jpg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/pages/ProfilePage',
    component: ProfilePagePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePagePage>;

const Template: ComponentStory<typeof ProfilePagePage> = () => <ProfilePagePage />;

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [ThemeOldDecorator(ThemeStory.LIGHT), StoreDecorator({
    profile: {
        data: {
            first: 'Илья',
            lastname: 'Барышев',
            age: 27,
            city: 'Набережные Челны',
            country: Country.Russia,
            currency: Currency.RUB,
            username: 'admin',
            avatar: AvatarImg,
        },
        form: {
            first: 'Илья',
            lastname: 'Барышев',
            age: 27,
            city: 'Набережные Челны',
            country: Country.Russia,
            currency: Currency.RUB,
            username: 'admin',
            avatar: AvatarImg,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeOldDecorator(ThemeStory.DARK), StoreDecorator({
    profile: {
        data: {
            first: 'Илья',
            lastname: 'Барышев',
            age: 27,
            city: 'Набережные Челны',
            country: Country.Russia,
            currency: Currency.RUB,
            username: 'admin',
            avatar: AvatarImg,
        },
        form: {
            first: 'Илья',
            lastname: 'Барышев',
            age: 27,
            city: 'Набережные Челны',
            country: Country.Russia,
            currency: Currency.RUB,
            username: 'admin',
            avatar: AvatarImg,
        },
    },
})];
