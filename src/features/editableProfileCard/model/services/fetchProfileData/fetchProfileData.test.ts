import { fetchProfileData } from './fetchProfileData';

import { Country } from '@/entities/country1';
import { Currency } from '@/entities/currency1';
import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/TestAsyncThunk';

const data = {
    first: 'Илья',
    lastname: 'Барышев',
    age: 27,
    city: 'Набережные Челны',
    country: Country.Russia,
    currency: Currency.RUB,
    username: 'admin',
};

describe('fetchProfileData.test', () => {
    test('success fetching', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const action = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(data);
    });

    test('error fetching', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const action = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('rejected');
    });
});
