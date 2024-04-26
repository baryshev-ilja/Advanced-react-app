import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileCardDeprecated } from '../ProfileCardDeprecated/ProfileCardDeprecated';
import cls from '../ProfileCardDeprecated/ProfileCardDeprecated.module.scss';
import type { ProfileCardProps } from '../ProfileCardProps/ProfileCardProps';
import { ProfileCardRedesigned } from '../ProfileCardRedesigned/ProfileCardRedesigned';
import clsRedesigned from '../ProfileCardRedesigned/ProfileCardRedesigned.module.scss';
import { ProfileCardSkeleton } from '../ProfileCardRedesigned/ProfileCardSkeleton';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text as TextDeprecated, TextAlign, ThemeText } from '@/shared/ui/deprecated/Text';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        validateErrors,
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

    if (isLoading) {
        return (
            <ToggleFeatures
                name="isAppRedesigned"
                on={<ProfileCardSkeleton />}
                off={(
                    <HStack max className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                        <Loader />
                    </HStack>
                )}
            />
        );
    }

    if (error) {
        return (
            <ToggleFeatures
                name="isAppRedesigned"
                on={(
                    <CardUI padding="16" borderRadius="16" className={clsRedesigned.cardError}>
                        <TextRedesigned
                            variant="error"
                            align="center"
                            title={t('Произошла ошибка')}
                            description={t('Попробуйте перезагрузить страницу')}
                        />
                    </CardUI>
                )}
                off={(
                    <div className={classNames(cls.profileCard, {}, [className])}>
                        <TextDeprecated
                            theme={ThemeText.ERROR}
                            title={t('Произошла ошибка')}
                            description={t('Попробуйте перезагрузить страницу')}
                            align={TextAlign.CENTER}
                        />
                    </div>
                )}
            />
        );
    }

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <ProfileCardRedesigned
                    className={className}
                    data={data}
                    isLoading={isLoading}
                    error={error}
                    validateErrors={validateErrors}
                    validateErrorsTranslateDictionary={validateErrorsTranslateDictionary}
                    readonly={readonly}
                    onChangeFirst={onChangeFirst}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            )}
            off={(
                <ProfileCardDeprecated
                    className={className}
                    data={data}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirst={onChangeFirst}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            )}
        />
    );
});
