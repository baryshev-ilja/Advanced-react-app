import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Modal } from './Modal';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    container: document.getElementById('root') as HTMLElement,
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, expedita ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, expedita.',
};
Light.decorators = [ThemeOldDecorator(ThemeStory.LIGHT), StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
    },
})];

export const Dark = Template.bind({});
Dark.args = {
    container: document.getElementById('root') as HTMLElement,
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, expedita ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, expedita.',
};

Dark.decorators = [ThemeOldDecorator(ThemeStory.DARK), StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
    },
})];
