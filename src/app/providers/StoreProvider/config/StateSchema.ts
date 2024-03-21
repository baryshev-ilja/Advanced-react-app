import {
    AnyAction,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CombinedState } from 'redux';

import type { ArticleDetailsSchema } from '@/entities/article';
import type { CounterSchema } from '@/entities/counter';
import type { ProfileSchema } from '@/entities/profile';
import type { UserSchema } from '@/entities/user';
import { ArticleCommentsSchema } from '@/features/addComments';
import { ArticleDetailsRecommendationsSchema } from '@/features/articleRecommendationList';
import type { LoginSchema } from '@/features/authByUsername';
import type { ArticlesPageSchema } from '@/pages/articlesPage';
import { rtkApi } from '@/shared/api/rtkApi';
import { ScrollSaveSchema } from '@/widgets/page';

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
