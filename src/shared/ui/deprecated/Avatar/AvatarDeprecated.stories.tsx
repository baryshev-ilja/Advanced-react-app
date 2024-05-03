import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import AvatarImg from '../../../assets/storybook.jpg';

import { Avatar } from './Avatar';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator(ThemeStory.LIGHT)],
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarImg,
    size: 150,
};

export const Small = Template.bind({});
Small.args = {
    src: AvatarImg,
    size: 50,
};
