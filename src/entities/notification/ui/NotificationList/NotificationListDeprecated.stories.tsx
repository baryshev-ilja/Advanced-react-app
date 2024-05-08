import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { NotificationList } from './NotificationList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeOldDecorator(ThemeStory.LIGHT)];
Normal.parameters = {
    mockData: [
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
    ],
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeOldDecorator(ThemeStory.DARK)];
Dark.parameters = {
    mockData: [
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
    ],
};
