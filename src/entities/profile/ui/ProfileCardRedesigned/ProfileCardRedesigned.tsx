import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import type { ProfileCardProps } from '../ProfileCardProps/ProfileCardProps';

import { CountrySelect } from '@/entities/country';
import { CurrencySelect } from '@/entities/currency';
import ValidationErrIcon from '@/shared/assets/newIcons/err-validate-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ProfileCardRedesigned.module.scss';

export const ProfileCardRedesigned = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        validateErrors = [],
        validateErrorsTranslateDictionary,
        readonly,
        onChangeFirst,
        onChangeLastname,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    const hasErrors = (validateErrors?.length > 0) && validateErrorsTranslateDictionary;

    const avatarSrcMemo = useMemo(() => data?.avatar, [data?.avatar]);

    return (
        <CardUI
            className={classNames(cls.profileCardRedesigned, {}, [className])}
            padding="16"
            gap="16"
            borderRadius="16"
        >
            <Avatar
                className={cls.avatar}
                src={avatarSrcMemo}
                isLoading={isLoading}
                alt={t('Фото пользователя')}
                size={128}
            />

            <VStack gap="16" align="start" max className={cls.errorsValidate}>
                {hasErrors && validateErrors.map((err) => (
                    <Button
                        className={cls.notificationValidate}
                        fullWidth
                        variant="errorValidation"
                        key={err}
                        data-testid="EditableProfileCard.Error"
                    >
                        <Icon Svg={ValidationErrIcon} width={22} height={22} />
                        {validateErrorsTranslateDictionary[err]}
                    </Button>
                ))}
            </VStack>

            <Input
                className={cls.inputFirstname}
                value={data?.first}
                placeholder={t('Иван')}
                labelElement={t('Имя')}
                readonly={readonly}
                onChange={onChangeFirst}
                data-testid="ProfileCard.firstname"
            />
            <Input
                className={cls.inputLastname}
                value={data?.lastname}
                placeholder={t('Иванов')}
                labelElement={t('Фамилия')}
                readonly={readonly}
                onChange={onChangeLastname}
                data-testid="ProfileCard.lastname"
            />
            <Input
                className={cls.inputAge}
                value={data?.age}
                placeholder={t('18')}
                labelElement={t('Возраст')}
                readonly={readonly}
                onChange={onChangeAge}
            />
            <Input
                className={cls.inputLinkAvatar}
                value={data?.avatar}
                labelElement={t('Ссылка на аватар')}
                readonly={readonly}
                onChange={onChangeAvatar}
            />
            <Input
                className={cls.inputUsername}
                value={data?.username}
                labelElement={t('Никнейм')}
                readonly={readonly}
                onChange={onChangeUsername}
            />
            <CountrySelect
                className={cls.inputCountry}
                value={data?.country}
                readonly={readonly}
                onChange={onChangeCountry}
            />
            <CurrencySelect
                className={cls.inputCurrency}
                value={data?.currency}
                readonly={readonly}
                onChange={onChangeCurrency}
            />
        </CardUI>
    );
};
