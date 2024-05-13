import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/article/testing';
import { loginReducer } from '@/features/authByUsername/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
import { articlesPageReducer } from '@/pages/articlesPage/testing';
import { ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articlesPage: articlesPageReducer,
};

/**
 * StoreDecorator - Декоратор, создающий вокруг <StoryComponent /> окружение,
 * в котором присутствуют необходимые редюсеры и стейт для отображения этого <StoryComponent />
 *
 * @param state - Частичный state: StateSchema, который передастся StoreProvider как initialState
 * @param asyncReducers - Дополнительные редюсеры, нужные для отображения <StoryComponent />
 */
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
