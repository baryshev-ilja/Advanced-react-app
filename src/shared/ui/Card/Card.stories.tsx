import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@/shared/ui/Text/Text';
import { Card } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/app/providers/ThemeProvider';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator(ThemeStory.LIGHT)],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text title="test" description="text text" />,
};
