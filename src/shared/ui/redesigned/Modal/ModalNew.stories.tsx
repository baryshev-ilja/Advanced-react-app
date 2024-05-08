import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Modal } from './Modal';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    container: document.getElementById('root') as HTMLElement,
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, expedita ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, expedita.',
};
Light.decorators = [
    ThemeNewDecorator(ThemeNewStory.LIGHT),
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {
    container: document.getElementById('root') as HTMLElement,
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, expedita ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, expedita.',
};
Dark.decorators = [
    ThemeNewDecorator(ThemeNewStory.DARK),
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: '123',
        },
    }),
];
