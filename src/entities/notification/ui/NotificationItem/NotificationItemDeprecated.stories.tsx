import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { NotificationItem } from './NotificationItem';

import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Dark = Template.bind({});
Dark.args = {
    item: {
        id: '1',
        title: 'Уведомление 1',
        description: 'Вы подписались на блог',
    },
};
Dark.decorators = [ThemeOldDecorator(ThemeStory.DARK)];
