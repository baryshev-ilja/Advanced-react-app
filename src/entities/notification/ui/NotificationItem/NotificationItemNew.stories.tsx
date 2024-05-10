import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NotificationItem } from './NotificationItem';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Light = Template.bind({});
Light.args = {
    item: {
        id: '1',
        title: 'Уведомление 1',
        description: 'Вы подписались на блог',
    },
};
Light.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const Dark = Template.bind({});
Dark.args = {
    item: {
        id: '1',
        title: 'Уведомление 1',
        description: 'Вы подписались на блог',
    },
};
Dark.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];
