import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/app/providers/ThemeProvider';
import { RatingCard } from './RatingCard';

export default {
    title: 'entities/RatingCard',
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
NormalWithoutRate.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const DarkWithRate = Template.bind({});
DarkWithRate.args = {
    rate: 4,
};
DarkWithRate.decorators = [ThemeDecorator(ThemeStory.DARK)];
