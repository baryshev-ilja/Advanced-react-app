import { getLoginPassword } from './getLoginPassword';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginPassword.test', () => {
    test('should return common state password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '1223',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toBe('1223');
    });

    test('should return empty common state password', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
