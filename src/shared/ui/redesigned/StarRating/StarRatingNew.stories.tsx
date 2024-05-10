import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { StarRating } from './StarRating';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Light = Template.bind({});
Light.args = {
    selectedStars: 4,
    size: 30,
};
Light.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const Dark = Template.bind({});
Dark.args = {
    selectedStars: 4,
    size: 30,
};
Dark.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];
