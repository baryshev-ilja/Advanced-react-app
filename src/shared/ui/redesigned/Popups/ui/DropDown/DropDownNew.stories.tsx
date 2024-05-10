import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '../../../Button/Button';

import { DropDown } from './DropDown';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/DropDown',
    component: DropDown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        NewDesignDecorator,
    ],
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const LightTop = Template.bind({});
LightTop.args = {
    direction: 'topRight',
    trigger: <Button variant="select">DropDown Menu</Button>,
    items: [
        {
            content: 'firstElement',
        },
        {
            content: 'secondElement',
        },
    ],
};
LightTop.decorators = [
    ThemeNewDecorator(ThemeNewStory.WHITE),
    (Story) => (
        <div style={
            {
                padding: 150,
                display: 'flex',
                justifyContent: 'flex-start',
                background: '#fff',
            }
        }
        >
            <Story />
        </div>
    ),
];

export const LightBottom = Template.bind({});
LightBottom.args = {
    direction: 'bottomRight',
    trigger: <Button variant="select">DropDown Menu</Button>,
    items: [
        {
            content: 'firstElement',
        },
        {
            content: 'secondElement',
        },
    ],
};
LightBottom.decorators = [
    ThemeNewDecorator(ThemeNewStory.WHITE),
    (Story) => (
        <div style={
            {
                padding: 150,
                display: 'flex',
                justifyContent: 'flex-start',
                background: '#fff',
            }
        }
        >
            <Story />
        </div>
    ),
];

export const DarkTop = Template.bind({});
DarkTop.args = {
    direction: 'topRight',
    trigger: <Button variant="select">DropDown Menu</Button>,
    items: [
        {
            content: 'firstElement',
        },
        {
            content: 'secondElement',
        },
    ],
};
DarkTop.decorators = [
    ThemeNewDecorator(ThemeNewStory.DARK),
    (Story) => (
        <div style={
            {
                padding: 150,
                display: 'flex',
                justifyContent: 'flex-start',
                background: '#070e33',
            }
        }
        >
            <Story />
        </div>
    ),
];

export const DarkBottom = Template.bind({});
DarkBottom.args = {
    direction: 'bottomRight',
    trigger: <Button variant="select">DropDown Menu</Button>,
    items: [
        {
            content: 'firstElement',
        },
        {
            content: 'secondElement',
        },
    ],
};
DarkBottom.decorators = [
    ThemeNewDecorator(ThemeNewStory.DARK),
    (Story) => (
        <div style={
            {
                padding: 150,
                display: 'flex',
                justifyContent: 'flex-start',
                background: '#070e33',
            }
        }
        >
            <Story />
        </div>
    ),
];
