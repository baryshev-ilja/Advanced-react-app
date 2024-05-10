import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Text } from './Text';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const LightAllPrimaryS = Template.bind({});
LightAllPrimaryS.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeS',
};
LightAllPrimaryS.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];

export const LightAllPrimaryM = Template.bind({});
LightAllPrimaryM.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeM',
};
LightAllPrimaryM.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];

export const LightAllPrimaryL = Template.bind({});
LightAllPrimaryL.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeL',
};
LightAllPrimaryL.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];

export const LightAllError = Template.bind({});
LightAllError.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeL',
    variant: 'error',
};
LightAllError.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];

export const LightAllCenter = Template.bind({});
LightAllCenter.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeL',
    align: 'center',
};
LightAllCenter.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];

export const LightAllRight = Template.bind({});
LightAllRight.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeL',
    align: 'right',
};
LightAllRight.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];

export const LightAllBold = Template.bind({});
LightAllBold.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeL',
    fontWeight: 'semiBold',
};
LightAllBold.decorators = [ThemeNewDecorator(ThemeNewStory.LIGHT)];

export const DarkAllPrimaryS = Template.bind({});
DarkAllPrimaryS.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeS',
};
DarkAllPrimaryS.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];

export const DarkAllPrimaryM = Template.bind({});
DarkAllPrimaryM.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeM',
};
DarkAllPrimaryM.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];

export const DarkAllPrimaryL = Template.bind({});
DarkAllPrimaryL.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeL',
};
DarkAllPrimaryL.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];

export const DarkAllError = Template.bind({});
DarkAllError.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeL',
    variant: 'error',
};
DarkAllError.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];

export const DarkAllCenter = Template.bind({});
DarkAllCenter.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeL',
    align: 'center',
};
DarkAllCenter.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];

export const DarkAllRight = Template.bind({});
DarkAllRight.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeL',
    align: 'right',
};
DarkAllRight.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];

export const DarkAllBold = Template.bind({});
DarkAllBold.args = {
    title: 'Title',
    description: 'It is just description',
    ui: 'It is just ui text',
    size: 'sizeL',
    fontWeight: 'semiBold',
};
DarkAllBold.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];
