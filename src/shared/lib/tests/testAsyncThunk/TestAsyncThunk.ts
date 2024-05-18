import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

import { StateSchema } from '@/app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

/**
 * TestAsyncThunk - Специальный класс, внутри которого инкапсулирована часто используемая логика
 * во время тестирования async thunk-ов (dispatch, actions и тд).
 * Делает код внутри тестовых файлов намного чище и меньше
 */
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    constructor(
        actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    /**
     * callThunk - Асинхронный метод заменяющий вызов dispatch(action)
     */
    async callThunk(arg: Arg) {
        const actionCreator = this.actionCreator(arg);
        const action = await actionCreator(
            this.dispatch,
            this.getState,
            { api: this.api, navigate: this.navigate },
        );

        return action;
    }
}
