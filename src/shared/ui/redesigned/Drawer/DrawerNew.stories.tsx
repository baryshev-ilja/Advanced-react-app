import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Drawer } from './Drawer';

// eslint-disable-next-line
import { NotificationItem } from '@/entities/notification/ui/NotificationItem/NotificationItem';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
    container: document.getElementById('root') as HTMLElement,
    children: (
        <NotificationItem item={{ title: 'Уведомление 1', id: '1', description: 'Оплатите подписку на блог' }} />
    ),
};
Normal.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    container: document.getElementById('root') as HTMLElement,
    children: (
        <NotificationItem item={{ title: 'Уведомление 1', id: '1', description: 'Оплатите подписку на блог' }} />
    ),
};
Dark.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];
