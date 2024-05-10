import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from '../../../Button';
import { Icon } from '../../../Icon';

import { Popover } from './Popover';

// eslint-disable-next-line baryshewww/layers-import
import { NotificationList } from '@/entities/notification';
import NotificationIconNew from '@/shared/assets/newIcons/notification-icon.svg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        NewDesignDecorator,
        StoreDecorator({}),
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

const buttonTriggerLight = (
    <Button
        variant="auth"
        buttonPadding="8"
        buttonWidth={40}
        tagName="span"
    >
        <Icon
            style={{ color: '#7b95b4' }}
            Svg={NotificationIconNew}
            width={22}
            height={22}
        />
    </Button>
);

const buttonTriggerDark = (
    <Button
        variant="auth"
        buttonPadding="8"
        buttonWidth={40}
        tagName="span"
    >
        <Icon
            style={{ color: '#6e5d9d' }}
            Svg={NotificationIconNew}
            width={22}
            height={22}
        />
    </Button>
);

const mockDataNotifications = [
    {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
            {
                id: '1',
                title: 'Уведомление 1',
                description: 'Вы подписались на блог',
            },
            {
                id: '2',
                title: 'Уведомление 2',
                description: 'Вы подписались на блог',
            },
            {
                id: '3',
                title: 'Уведомление 3',
                description: 'Вы подписались на блог',
            },
        ],
        delay: 10,
    },
];

export const Light = Template.bind({});
Light.args = {
    direction: 'bottomLeft',
    trigger: buttonTriggerLight,
    children: <NotificationList />,
};
Light.parameters = { mockData: mockDataNotifications };
Light.decorators = [
    ThemeNewDecorator(ThemeNewStory.WHITE),
    (Story) => (
        <div style={
            {
                padding: 50,
                display: 'flex',
                justifyContent: 'center',
                background: '#fff',
            }
        }
        >
            <Story />
        </div>
    ),
];

export const Dark = Template.bind({});
Dark.args = {
    direction: 'bottomLeft',
    trigger: buttonTriggerDark,
    children: <NotificationList />,
};
Dark.parameters = { mockData: mockDataNotifications };
Dark.decorators = [
    ThemeNewDecorator(ThemeNewStory.DARK),
    (Story) => (
        <div style={
            {
                padding: 50,
                display: 'flex',
                justifyContent: 'center',
                background: '#070e33',
            }
        }
        >
            <Story />
        </div>
    ),
];
