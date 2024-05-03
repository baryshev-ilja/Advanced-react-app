import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button, ButtonTheme } from './Button';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ThemeStory } from '@/shared/const/theme';

export default {
    title: 'DEPRECATED/shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: 'sizeM',
};
Primary.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: 'sizeL',
};
PrimarySizeL.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const PrimarySizeXL = Template.bind({});
PrimarySizeXL.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: 'sizeXL',
};
PrimarySizeXL.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
Clear.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
Outline.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(ThemeStory.DARK)];

export const OutlineError = Template.bind({});
OutlineError.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE_ERROR,
};
OutlineError.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundTheme.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInverted.decorators = [ThemeDecorator(ThemeStory.DARK)];

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: 'sizeM',
};
SquareM.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: 'sizeL',
};
SquareL.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: 'sizeXL',
};
SquareXL.decorators = [ThemeDecorator(ThemeStory.LIGHT)];

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    disabled: true,
};
Disabled.decorators = [ThemeDecorator(ThemeStory.LIGHT)];
