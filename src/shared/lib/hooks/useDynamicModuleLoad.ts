import { useEffect } from 'react';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [nameKey in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface useDynamicModuleLoadProps {
    reducers: ReducersList;
    removeAfterUnmount: boolean;
}

export function useDynamicModuleLoad(props: useDynamicModuleLoadProps) {
    const {
        reducers,
        removeAfterUnmount,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([nameKey, reducer]: ReducersListEntry) => {
            store.reducerManager.add(nameKey, reducer);
            dispatch({ type: `@INIT ${nameKey} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([nameKey, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(nameKey);
                    dispatch({ type: `@DESTROY ${nameKey} reducer` });
                });
            }
        };
        //    eslint-disable-next-line
    }, []);
}
