import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';
import { updateProfileData } from './updateProfileData';

const data = {
    first: 'Илья',
    lastname: 'Барышев',
    age: 27,
    city: 'Набережные Челны',
    country: Country.Russia,
    currency: Currency.RUB,
    username: 'admin',
};

describe('updateProfileData.test', () => {
    test('success update', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const action = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(data);
    });

    test('error update', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const action = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('rejected');
        expect(action.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate update', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...data,
                    lastname: '',
                },
            },
        });

        const action = await thunk.callThunk();

        expect(action.meta.requestStatus).toBe('rejected');
        expect(action.payload).toEqual([ValidateProfileError.INCORRECT_FIRST_LASTNAME]);
    });
});
