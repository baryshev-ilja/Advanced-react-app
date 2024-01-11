import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export function StoreDecorator(state: DeepPartial<StateSchema>) {
    return (StoryComponent: Story) => (
        <StoreProvider initialState={state}>
            <StoryComponent />
        </StoreProvider>
    );
}
