import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'features/EditProfileCard/model/slice/profileSlice';
import { ReducersList } from 'shared/lib/hooks/useDynamicReducerLoad';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export function StoreDecorator(
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
}
