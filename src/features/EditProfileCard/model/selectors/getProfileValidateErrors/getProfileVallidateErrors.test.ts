import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return profile state validate errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileError.NO_COUNTRY],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileError.NO_COUNTRY]);
    });

    test('should return empty profile state validate errors undefined', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: undefined,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
    });
});
