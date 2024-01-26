import { Profile, ValidateProfileError } from 'entities/Profile';

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        first,
        lastname,
        age,
        country,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_FIRST_LASTNAME);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.NO_COUNTRY);
    }

    return errors;
};
