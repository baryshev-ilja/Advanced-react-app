import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Modal } from './Modal';

export default {
    title: 'widgets/Modal',
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
Light.decorators = [ThemeDecorator(ThemeStory.LIGHT), StoreDecorator({
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

Dark.decorators = [ThemeDecorator(ThemeStory.DARK), StoreDecorator({
    loginForm: {
        username: 'admin',
        password: '123',
    },
})];
