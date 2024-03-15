import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/app/providers/ThemeProvider';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator(ThemeStory.LIGHT)],
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const DirectionRow = Template.bind({});
DirectionRow.args = {
    children: (
        <>
            <div>Element-1</div>
            <div>Element-2</div>
            <div>Element-3</div>
            <div>Element-4</div>
            <div>Element-5</div>
        </>
    ),
};

export const JustifyRowCenter = Template.bind({});
JustifyRowCenter.args = {
    justify: 'center',
    children: (
        <>
            <div>Element-1</div>
            <div>Element-2</div>
            <div>Element-3</div>
            <div>Element-4</div>
            <div>Element-5</div>
        </>
    ),
};

export const DirectionColumn = Template.bind({});
DirectionColumn.args = {
    direction: 'column',
    children: (
        <>
            <div>Element-1</div>
            <div>Element-2</div>
            <div>Element-3</div>
            <div>Element-4</div>
            <div>Element-5</div>
        </>
    ),
};

export const DirectionRowGap16 = Template.bind({});
DirectionRowGap16.args = {
    gap: '16',
    children: (
        <>
            <div>Element-1</div>
            <div>Element-2</div>
            <div>Element-3</div>
            <div>Element-4</div>
            <div>Element-5</div>
        </>
    ),
};

export const DirectionColumnGap24 = Template.bind({});
DirectionColumnGap24.args = {
    direction: 'column',
    gap: '24',
    children: (
        <>
            <div>Element-1</div>
            <div>Element-2</div>
            <div>Element-3</div>
            <div>Element-4</div>
            <div>Element-5</div>
        </>
    ),
};
