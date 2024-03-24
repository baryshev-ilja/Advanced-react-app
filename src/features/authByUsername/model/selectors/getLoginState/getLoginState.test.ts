import { getLoginState } from './getLoginState';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginState.test', () => {
    test('should return common state', () => {
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

    test('should return empty common state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
