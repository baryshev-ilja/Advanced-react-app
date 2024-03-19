import { loginByUsername } from './loginByUsername';

import { userActions } from '@/entities/user';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';

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
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        // const actionCreator = loginByUsername({ username: 'admin', password: '123' });
        // const action = await actionCreator(dispatch, getState, undefined);
        const action = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.api.post).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(userValue);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        // const actionCreator = loginByUsername({ username: 'admin', password: '123' });
        // const action = await actionCreator(dispatch, getState, undefined);
        const action = await thunk.callThunk({ username: 'admin', password: '123' });

        expect(thunk.api.post).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('rejected');
        expect(action.payload).toBe('error');
    });
});
