import { validateProfileData } from './validateProfileData';

import { Country } from '@/entities/country';
import { Currency } from '@/entities/currency';
import { ValidateProfileError } from '@/entities/profile';

const data = {
    first: 'Илья',
    lastname: 'Барышев',
    age: 27,
    city: 'Набережные Челны',
    country: Country.Russia,
    currency: Currency.RUB,
    username: 'admin',
};

describe('validateProfileData.test', () => {
    test('return empty array with errors', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('return array with first_lastname error', async () => {
        const result = validateProfileData({ ...data, first: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_FIRST_LASTNAME]);
    });

    test('return array with age error', async () => {
        const result = validateProfileData({ ...data, age: NaN });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('return array with country error', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.NO_COUNTRY]);
    });

    test('return array with all errors', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_FIRST_LASTNAME,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.NO_COUNTRY,
        ]);
    });
});
