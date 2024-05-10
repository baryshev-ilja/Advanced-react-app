import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { EditableProfileCard } from './EditableProfileCard';

import { Country } from '@/entities/country';
import { Currency } from '@/entities/currency';
import AvatarImg from '@/shared/assets/storybook.jpg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        ThemeNewDecorator(ThemeNewStory.LIGHT),
        (Story) => (
            <div style={
                {
                    width: '900px',
                    height: '450px',
                    background: '#e9f0f6',
                }
            }
            >
                <Story />
            </div>
        ),
        NewDesignDecorator,
    ],
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
