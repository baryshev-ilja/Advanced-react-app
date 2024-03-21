import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

import { counterReducer } from '@/entities/counter1';
import { userReducer } from '@/entities/user1';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';
import { scrollSaveReducer } from '@/widgets/page1';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: scrollSaveReducer,
        rtkApi: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        // @ts-ignore
        reducer: reducerManager.reduce as ReducersMapObject<StateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
