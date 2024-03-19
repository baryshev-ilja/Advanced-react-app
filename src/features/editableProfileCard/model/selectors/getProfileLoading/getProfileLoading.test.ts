import { getProfileLoading } from './getProfileLoading';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getProfileLoading.test', () => {
    test('should return profile state loading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: false,
            },
        };
        expect(getProfileLoading(state as StateSchema)).toBe(false);
    });

    test('should return empty profile state undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileLoading(state as StateSchema)).toBe(undefined);
    });
});
