import { getLoginLoading } from './getLoginLoading';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getLoginLoading.test', () => {
    test('should return login state loading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginLoading(state as StateSchema)).toBe(true);
    });

    test('should return empty login state loading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginLoading(state as StateSchema)).toBe(false);
    });
});
