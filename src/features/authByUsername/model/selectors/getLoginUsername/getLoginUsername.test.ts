import { getLoginUsername } from './getLoginUsername';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginUsername.test', () => {
    test('should return common state error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toBe('admin');
    });

    test('should return empty common state error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
