import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { ListBox } from './ListBox';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        NewDesignDecorator,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const LightTop = Template.bind({});
LightTop.args = {
    currentValue: 'firstElement',
    direction: 'topRight',
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
        },
    ],
};
LightTop.decorators = [
    ThemeNewDecorator(ThemeNewStory.WHITE),
    (Story) => <div style={{ padding: 150, background: '#fff' }}><Story /></div>,
];

export const LightBottom = Template.bind({});
LightBottom.args = {
    currentValue: 'firstElement',
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
        },
    ],
};
LightBottom.decorators = [
    ThemeNewDecorator(ThemeNewStory.WHITE),
    (Story) => <div style={{ padding: 150, background: '#fff' }}><Story /></div>,
];

export const DarkTop = Template.bind({});
DarkTop.args = {
    currentValue: 'firstElement',
    direction: 'topRight',
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
        },
    ],
};
DarkTop.decorators = [
    ThemeNewDecorator(ThemeNewStory.DARK),
    (Story) => <div style={{ padding: 150, background: '#070e33' }}><Story /></div>,
];

export const DarkBottom = Template.bind({});
DarkBottom.args = {
    currentValue: 'firstElement',
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
        },
    ],
};
DarkBottom.decorators = [
    ThemeNewDecorator(ThemeNewStory.DARK),
    (Story) => <div style={{ padding: 150, background: '#070e33' }}><Story /></div>,
];
