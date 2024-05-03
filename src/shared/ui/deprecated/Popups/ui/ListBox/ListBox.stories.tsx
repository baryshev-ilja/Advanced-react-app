import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ListBox } from './ListBox';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 150 }}><Story /></div>,
        ThemeDecorator(ThemeStory.LIGHT),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const TopLeft = Template.bind({});
TopLeft.args = {
    currentValue: 'Menu',
    direction: 'topLeft',
    items: [
        {
            value: 'firstElement',
            content: 'firstElement',
            disabled: true,
        },
        {
            value: 'secondElement',
            content: 'secondElement',
            disabled: true,
        },
        {
            value: 'thirdElement',
            content: 'thirdElement',
        },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    currentValue: 'Menu',
    direction: 'topRight',
    items: [
        {
            value: 'firstElement',
            content: 'firstElement',
        },
        {
            value: 'secondElement',
            content: 'secondElement',
            disabled: true,
        },
        {
            value: 'thirdElement',
            content: 'thirdElement',
        },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    currentValue: 'Menu',
    direction: 'bottomRight',
    items: [
        {
            value: 'firstElement',
            content: 'firstElement',
        },
        {
            value: 'secondElement',
            content: 'secondElement',
        },
        {
            value: 'thirdElement',
            content: 'thirdElement',
            disabled: true,
        },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    currentValue: 'Menu',
    direction: 'bottomLeft',
    items: [
        {
            value: 'firstElement',
            content: 'firstElement',
            disabled: true,
        },
        {
            value: 'secondElement',
            content: 'secondElement',
        },
        {
            value: 'thirdElement',
            content: 'thirdElement',
        },
    ],
};
