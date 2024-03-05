import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, ThemeText } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/currency';
import { Country, CountrySelect } from 'entities/country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirst?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
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

    if (isLoading) {
        return (
            <HStack max className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className])}>
                <Text
                    theme={ThemeText.ERROR}
                    title={t('Произошла ошибка')}
                    description={t('Попробуйте перезагрузить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <VStack gap="8" align="start" max className={classNames(cls.profileCard, {}, [className])}>
            <HStack justify="center" max>
                {data?.avatar && (
                    <Avatar
                        src={data?.avatar}
                        alt={t('Фото пользователя')}
                        size={250}
                    />
                )}
            </HStack>
            <VStack gap="8" align="start">
                <Input
                    className={cls.input}
                    value={data?.first}
                    labelElement={t('Ваше имя')}
                    readonly={readonly}
                    onChange={onChangeFirst}
                />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    labelElement={t('Ваша фамилия')}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    className={cls.input}
                    value={data?.age}
                    labelElement={t('Ваш возраст')}
                    readonly={readonly}
                    onChange={onChangeAge}
                />
                <Input
                    className={cls.input}
                    value={data?.username}
                    labelElement={t('Ваш никнейм')}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    className={cls.input}
                    value={data?.avatar}
                    labelElement={t('Ссылка на фото профиля')}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    readonly={readonly}
                    onChange={onChangeCurrency}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    readonly={readonly}
                    onChange={onChangeCountry}
                />
            </VStack>

        </VStack>
    );
};
