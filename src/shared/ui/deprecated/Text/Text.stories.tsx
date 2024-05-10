import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Text, TextSize, ThemeText } from './Text';

import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TitleWithDescription = Template.bind({});
TitleWithDescription.args = {
    title: 'Title',
    description: 'It is just description',
};
TitleWithDescription.decorators = [ThemeOldDecorator(ThemeStory.LIGHT)];

export const TitleWithDescriptionError = Template.bind({});
TitleWithDescriptionError.args = {
    title: 'Error',
    description: 'Unfortunately an error occurred',
    theme: ThemeText.ERROR,
};
TitleWithDescriptionError.decorators = [ThemeOldDecorator(ThemeStory.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Error',
    theme: ThemeText.ERROR,
};
OnlyTitle.decorators = [ThemeOldDecorator(ThemeStory.DARK)];

export const OnlyDescription = Template.bind({});
OnlyDescription.args = {
    description: 'Unfortunately an error occurred',
    theme: ThemeText.ERROR,
};
OnlyDescription.decorators = [ThemeOldDecorator(ThemeStory.DARK)];

export const H1 = Template.bind({});
H1.args = {
    size: TextSize.L,
    title: 'Title',
    description: 'It is just description',
};
H1.decorators = [ThemeOldDecorator(ThemeStory.LIGHT)];

export const H2 = Template.bind({});
H2.args = {
    size: TextSize.M,
    title: 'Title',
    description: 'It is just description',
};
H2.decorators = [ThemeOldDecorator(ThemeStory.LIGHT)];

export const H3 = Template.bind({});
H3.args = {
    size: TextSize.S,
    title: 'Title',
    description: 'It is just description',
};
H3.decorators = [ThemeOldDecorator(ThemeStory.LIGHT)];
