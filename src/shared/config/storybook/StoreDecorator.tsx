import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/article1/testing';
import { loginReducer } from '@/features/authByUsername1/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { articlesPageReducer } from '@/pages/articlesPage1/testing';
import { ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';

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
