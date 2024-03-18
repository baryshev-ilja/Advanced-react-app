import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Drawer } from './Drawer';
// eslint-disable-next-line
import { NotificationItem } from '@/entities/notification/ui/NotificationItem/NotificationItem';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
    children: (
        <NotificationItem item={{ title: 'Уведомление 1', id: '1', description: 'Оплатите подписку на блог' }} />
    ),
};
Normal.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: (
        <NotificationItem item={{ title: 'Уведомление 1', id: '1', description: 'Оплатите подписку на блог' }} />
    ),
};
Dark.decorators = [ThemeDecorator(ThemeStory.DARK)];
