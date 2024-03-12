import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return login state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '',
                password: '',
                isLoading: false,
                error: 'error',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: '',
            password: '',
            isLoading: false,
            error: 'error',
        });
    });

    test('should return empty login state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
