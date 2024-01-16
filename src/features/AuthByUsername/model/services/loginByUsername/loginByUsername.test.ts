import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    test('success login', async () => {
        const userValue = { id: '1', username: 'admin' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        // const actionCreator = loginByUsername({ username: 'admin', password: '123' });
        // const action = await actionCreator(dispatch, getState, undefined);

        const thunk = new TestAsyncThunk(loginByUsername);
        const action = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(userValue);
    });

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        // const actionCreator = loginByUsername({ username: 'admin', password: '123' });
        // const action = await actionCreator(dispatch, getState, undefined);

        const thunk = new TestAsyncThunk(loginByUsername);
        const action = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('rejected');
        expect(action.payload).toBe('error');
    });
});
