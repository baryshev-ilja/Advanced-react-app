import type { Currency } from '@/entities/currency';
import type { Country } from '@/entities/country';
import { ValidateProfileError } from '../consts/constsProfile';

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
