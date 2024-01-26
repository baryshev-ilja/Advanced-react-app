import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/storybook.jpg';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = () => <EditableProfileCard />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
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

export const LightWithServerError = Template.bind({});
LightWithServerError.args = {
};
LightWithServerError.decorators = [StoreDecorator({
    profile: {
        error: 'error',
    },
})];

export const LightLoading = Template.bind({});
LightLoading.args = {
};
LightLoading.decorators = [StoreDecorator({
    profile: {
        isLoading: true,
    },
})];
