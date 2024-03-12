import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ProfileCard } from '@/entities/profile/ui/ProfileCard/ProfileCard';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from '@/entities/currency';
import { Country } from '@/entities/country';
import { Text, ThemeText } from '@/shared/ui/Text/Text';
import { ValidateProfileError } from '@/entities/profile';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicReducerLoad, ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const { className, id } = props;

    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

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
        <DynamicReducerLoad reducers={reducers}>
            <VStack gap="16">
                <EditableProfileCardHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        theme={ThemeText.ERROR}
                        description={validateErrorsTranslate[err]}
                        key={err}
                        data-testid="EditableProfileCard.Error"
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
            </VStack>
        </DynamicReducerLoad>
    );
};
