import { Reducer } from '@reduxjs/toolkit';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';

/**
 * ReducersList - Объект перечисления {название редюсера: редюсер}
 */
export type ReducersList = {
    [nameKey in StateSchemaKey]?: Reducer<NonNullable<StateSchema[nameKey]>>
}

interface DynamicReducerLoadProps {
    /** reducers - Редюсеры, которые будут подгружаться асинхронно */
    reducers: ReducersList;
    /** removeAfterUnmount - Флаг для удаления/сохранения редюсера в стейте после размонтирования */
    removeAfterUnmount?: boolean;
    /** children - Компонент, для которого будут применяться асинхронные редюсеры */
    children: ReactNode;
}

export const DynamicReducerLoad = (props: DynamicReducerLoadProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;

    /**
     * 1. Получаем store c возможностью управления редюсерами (ReduxStoreWithManager)
     */
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        /** 2. Получаем из store список всех 'постоянных' редюсеров */
        const mountedReducers = store.reducerManager.getReducerMap();

        /** 3. Проходимся по каждому 'асинхронному' редюсеру, из переданного списка  */
        Object.entries(reducers).forEach(([nameKey, reducer]) => {
            const mounted = mountedReducers[nameKey as StateSchemaKey];

            /** 4. Если 'асинхронный' редюсер отсутствует среди постоянных, добавить его в store */
            if (!mounted) {
                store.reducerManager.add(nameKey as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${nameKey} reducer` });
            }
        });

        return () => {
            /**
             * 5. При размонтировании компонента DynamicReducerLoad, если флаг removeAfterUnmount = true,
             * пройтись по всем 'асинхронным' редюсерам и удалить их из store
              */
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
