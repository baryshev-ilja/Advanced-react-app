import { ProfileSchema, ValidateProfileError } from '@/entities/profile';
import { Country } from '@/entities/country';
import { Currency } from '@/entities/currency';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    first: 'Илья',
    lastname: 'Барышев',
    age: 27,
    city: 'Набережные Челны',
    country: Country.Russia,
    currency: Currency.RUB,
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(false),
        )).toEqual({ readonly: false });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            form: data,
            data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { first: '123' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ first: 'Иван' }),
        )).toEqual({
            form: { first: 'Иван' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            form: data,
            data,
            readonly: true,
        });
    });
});
