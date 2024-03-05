import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/authByUsername';
import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { ProfileSchema } from 'entities/profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/article/model/types/ArticleDetailsSchema';

import { ArticlesPageSchema } from 'pages/articlesPage/model/types/ArticlesPageSchema';
import { ScrollSaveSchema } from 'widgets/page';
import { ArticleCommentsSchema } from 'features/addComments';
import { rtkApi } from 'shared/api/rtkApi';
import { ArticleDetailsRecommendationsSchema } from 'features/articleRecommendationList';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollSave: ScrollSaveSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

    // Асинхронные редюсеры
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    articleComments?: ArticleCommentsSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void,
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfigApi<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
