import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, ThemeText } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { profileActions } from '../model/slice/profileSlice';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileLoading } from '../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';

export const EditableProfileCard = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorsTranslate = {
        [ValidateProfileError.INCORRECT_FIRST_LASTNAME]: t('Имя и фамилия обязательны!'),
        [ValidateProfileError.INCORRECT_AGE]: t('Возраст обязателен и должен быть целым числом!'),
        [ValidateProfileError.NO_DATA]: t('Нельзя отправить форму пустой!'),
        [ValidateProfileError.NO_COUNTRY]: t('Выберите страну!'),
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка на сервере'),
    };

    const firstChangeHandler = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const lastnameChangeHandler = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const ageChangeHandler = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const usernameChangeHandler = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const avatarChangeHandler = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const currencyChangeHandler = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const countryChangeHandler = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <>
            {validateErrors?.length && validateErrors.map((err) => (
                <Text
                    theme={ThemeText.ERROR}
                    description={validateErrorsTranslate[err]}
                    key={err}
                />
            ))}
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirst={firstChangeHandler}
                onChangeLastname={lastnameChangeHandler}
                onChangeAge={ageChangeHandler}
                onChangeUsername={usernameChangeHandler}
                onChangeAvatar={avatarChangeHandler}
                onChangeCurrency={currencyChangeHandler}
                onChangeCountry={countryChangeHandler}
            />
        </>
    );
};
