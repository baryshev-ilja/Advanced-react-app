import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { RatingCard } from './RatingCard';

import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/entities/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const NormalWithoutRate = Template.bind({});
NormalWithoutRate.args = {
    title: 'Ну как вам статья?',
};
NormalWithoutRate.decorators = [ThemeOldDecorator(ThemeStory.LIGHT)];

export const DarkWithRate = Template.bind({});
DarkWithRate.args = {
    rate: 4,
};
DarkWithRate.decorators = [ThemeOldDecorator(ThemeStory.DARK)];
