import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { profileReducer } from '../../model/slice/profileSlice';

import { EditableProfileCard } from './EditableProfileCard';

import { Country } from '@/entities/country1';
import { Currency } from '@/entities/currency1';
import { Profile } from '@/entities/profile1';
import { $api } from '@/shared/api/api';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

beforeAll(() => {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.append(root);

    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
});

const profile: Profile = {
    id: '1',
    username: 'admin',
    lastname: 'Baryshev',
    first: 'Ilja',
    age: 27,
    country: Country.Russia,
    currency: Currency.RUB,
    city: 'Naberezhnye Chelny',
};

const initialState = {
    initialState: {
        profile: {
            id: '1',
            data: profile,
            form: profile,
            readonly: true,
        },
        user: {
            authData: {
                username: 'admin',
                id: '1',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('EditableProfileCard test', () => {
    test('Должна появится кнопка отмены', async () => {
        componentRender(<EditableProfileCard />, initialState);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

        expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument();
    });

    test('Есть ли инпут Имя', async () => {
        componentRender(<EditableProfileCard />, initialState);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));
        expect(screen.getByTestId('ProfileCard.firstname')).toBeInTheDocument();
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    });

    test('Происходит сбрасывание данных к дефолтным значениям', async () => {
        componentRender(<EditableProfileCard />, initialState);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'mironov');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('mironov');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Ilja');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Baryshev');
    });

    test('Показывается ошибка валидации', async () => {
        componentRender(<EditableProfileCard />, initialState);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('Происходит успешная отправка на сервер, если нет ошибки', async () => {
        componentRender(<EditableProfileCard />, initialState);
        const mockedPutReq = jest.spyOn($api, 'put');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'));

        expect(mockedPutReq).toHaveBeenCalled();
    });
});
