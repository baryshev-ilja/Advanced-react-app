import { FC, useEffect } from 'react';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [nameKey in StateSchemaKey]?: Reducer
}

interface DynamicReducerLoadProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicReducerLoad: FC<DynamicReducerLoadProps> = (props) => {
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
