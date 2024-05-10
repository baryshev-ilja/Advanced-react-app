import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { CountrySelect } from './CountrySelect';

import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeOldDecorator(ThemeStory.LIGHT)],
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    direction: 'bottomRight',
};
