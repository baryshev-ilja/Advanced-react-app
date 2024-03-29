import { Reducer } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';

export type ReducersList = {
    [nameKey in StateSchemaKey]?: Reducer<NonNullable<StateSchema[nameKey]>>
}

interface DynamicReducerLoadProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicReducerLoad = (props: DynamicReducerLoadProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([nameKey, reducer]) => {
            const mounted = mountedReducers[nameKey as StateSchemaKey];

            if (!mounted) {
                store.reducerManager.add(nameKey as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${nameKey} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([nameKey, reducer]) => {
                    store.reducerManager.remove(nameKey as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${nameKey} reducer` });
                });
            }
        };
        //    eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
