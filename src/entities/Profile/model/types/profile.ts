import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export enum ValidateProfileError {
    INCORRECT_FIRST_LASTNAME = 'INCORRECT_FIRST_LASTNAME',
    INCORRECT_AGE = 'INCORRECT_AGE',
    NO_DATA = 'NO_DATA',
    NO_COUNTRY = 'NO_COUNTRY',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    id?: string,
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string,
}

export interface ProfileSchema {
    id?: string;
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error: string | undefined;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
