import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit/dist';
import { useMemo } from 'react';

import { useAppDispatch } from '../hooks/useAppDispatch/useAppDispatch';

/**
 * buildSlice - Вспомогательная утилита, для более лаконичного использования actions в slice.
 * Принимает те же самые входные данные, что и обычный createSlice(). Но создает внутри себя
 * кастомный хук useActions. Этот хук 'биндит' dispatch к данным. То есть потом в коде нет необходимости
 * постоянно вызывать хук useDispatch. Он уже используется внутри кастомного хука useActions.
 * Actions которые возвращает хук useActions можно использовать без dispatch.
 */
export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
    >(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options);

    const useActions = (): typeof slice.actions => {
        const dispatch = useAppDispatch();

        // @ts-ignore
        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
    };

    return {
        ...slice,
        useActions,
    };
}
