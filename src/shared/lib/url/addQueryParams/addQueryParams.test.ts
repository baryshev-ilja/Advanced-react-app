import { getQueryParams } from './addQueryParams';

describe('getQueryParams.test', () => {
    test('test with multi params', () => {
        const params = {
            string: 'asc',
            query: 'search',
        };
        expect(getQueryParams(params)).toBe('?string=asc&query=search');
    });

    test('test with one param', () => {
        const params = {
            string: 'asc',
        };
        expect(getQueryParams(params)).toBe('?string=asc');
    });

    test('test with undefined', () => {
        const params = {
            string: 'asc',
            query: 'search',
            q: undefined,
        };
        expect(getQueryParams(params)).toBe('?string=asc&query=search');
    });
});
