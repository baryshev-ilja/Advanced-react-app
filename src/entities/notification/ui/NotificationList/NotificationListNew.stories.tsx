import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { NotificationList } from './NotificationList';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), NewDesignDecorator],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

const mocks = [
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
        delay: 900,
    },
];

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];
Normal.parameters = {
    mockData: mocks,
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];
Dark.parameters = {
    mockData: mocks,
};
