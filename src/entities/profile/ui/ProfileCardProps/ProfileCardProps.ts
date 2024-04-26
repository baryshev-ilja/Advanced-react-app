import { Profile, ValidateProfileError } from '../..';

import { Country } from '@/entities/country';
import { Currency } from '@/entities/currency';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    validateErrors?: ValidateProfileError[];
    validateErrorsTranslateDictionary?: Record<ValidateProfileError, string>;
    readonly?: boolean;
    onChangeFirst?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}
