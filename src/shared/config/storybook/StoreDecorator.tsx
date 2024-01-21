import { Story } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export function StoreDecorator(
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) {
    return (StoryComponent: Story) => (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    );
}
