import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CurrencySelect } from './CurrencySelect';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Light = Template.bind({});
Light.args = {
    direction: 'bottomRight',
};
Light.decorators = [
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

export const Dark = Template.bind({});
Dark.args = {
    direction: 'bottomRight',
};
Dark.decorators = [
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
