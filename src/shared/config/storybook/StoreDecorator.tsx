import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/authByUsername/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';
import { articlesPageReducer } from '@/pages/articlesPage/testing';
import { articleDetailsReducer } from '@/entities/article/testing';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articlesPage: articlesPageReducer,
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
