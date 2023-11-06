import { classNames } from './classNames';

describe('with only first param', () => {
    test('test', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        expect(classNames('someClass', {}, ['num'])).toBe('someClass num');
    });

    test('with additional', () => {
        const finish = 'someClass num';
        expect(classNames('someClass', { h: undefined, n: false }, ['num'])).toBe(finish);
    });
});
