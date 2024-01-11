import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, ThemeText } from './Text';

export default {
    title: 'shared/Text',
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

export const TitleWithDescriptionError = Template.bind({});
TitleWithDescriptionError.args = {
    title: 'Error',
    description: 'Unfortunately an error occurred',
    theme: ThemeText.ERROR,
};
TitleWithDescriptionError.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Error',
    theme: ThemeText.ERROR,
};
OnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyDescription = Template.bind({});
OnlyDescription.args = {
    description: 'Unfortunately an error occurred',
    theme: ThemeText.ERROR,
};
OnlyDescription.decorators = [ThemeDecorator(Theme.DARK)];
