import { getLoginError } from './getLoginError';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginError.test', () => {
    test('should return common state error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateSchema)).toBe('error');
    });

    test('should return empty common state error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toBe(undefined);
    });
});
