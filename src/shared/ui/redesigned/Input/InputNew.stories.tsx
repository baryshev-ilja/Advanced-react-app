import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Icon } from '../Icon';

import { Input } from './Input';

import SearchIcon from '@/shared/assets/newIcons/search-icon.svg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
    placeholder: 'Введите текст...',
};
WithoutLabel.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const WithLabel = Template.bind({});
WithLabel.args = {
    placeholder: 'Николай',
    labelElement: 'Имя:',
};
WithLabel.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const WithIcon = Template.bind({});
WithIcon.args = {
    placeholder: 'Николай',
    labelElement: 'Имя:',
    iconInput: <Icon Svg={SearchIcon} width={18} height={18} />,
};
WithIcon.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'Николай',
    labelElement: 'Имя:',
    iconInput: <Icon Svg={SearchIcon} width={18} height={18} />,
};
Dark.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];
