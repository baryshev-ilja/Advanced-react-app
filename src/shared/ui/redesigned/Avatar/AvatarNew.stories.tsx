import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import AvatarImg from '../../../assets/storybook.jpg';

import { Avatar } from './Avatar';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarImg,
    size: 150,
};
Primary.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];

export const Small = Template.bind({});
Small.args = {
    src: AvatarImg,
    size: 50,
};
Small.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];
