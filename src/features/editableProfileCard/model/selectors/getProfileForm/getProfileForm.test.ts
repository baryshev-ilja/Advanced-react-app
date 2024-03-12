import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/country';
import { Currency } from '@/entities/currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return profile state form', () => {
        const data = {
            first: 'Илья',
            lastname: 'Барышев',
            age: 27,
            city: 'Набережные Челны',
            country: Country.Russia,
            currency: Currency.RUB,
            username: 'admin',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should return empty profile state undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
