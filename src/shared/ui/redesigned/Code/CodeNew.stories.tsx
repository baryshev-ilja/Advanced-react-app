import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Code } from './Code';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Light = Template.bind({});
Light.args = {
    text: `export function StoreDecorator(
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) {
    return (StoryComponent: Story) => (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    );
}`,
};
Light.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const Dark = Template.bind({});
Dark.args = {
    text: `export function StoreDecorator(
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) {
    return (StoryComponent: Story) => (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    );
}`,
};
Dark.decorators = [ThemeNewDecorator(ThemeNewStory.DARK)];
