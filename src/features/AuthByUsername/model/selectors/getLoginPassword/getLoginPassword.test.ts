import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return login state password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '1223',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toBe('1223');
    });

    test('should return empty login state password', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
