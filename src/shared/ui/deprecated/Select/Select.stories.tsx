import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Select } from './Select';

import { ThemeOldDecorator } from '@/shared/config/storybook/ThemeOldDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeOldDecorator(ThemeStory.LIGHT)],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Выберите значение',
    value: '2',
    options: [
        { value: '1', content: 'Первый пункт' },
        { value: '2', content: 'Второй пункт' },
    ],
};
