import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Profile } from '@/entities/profile';
import { getUserAuthData } from '@/entities/user';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { getFeatureFlag, updateFeatureFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/redesigned/Button';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './UiDesignSwitcherRedesigned.module.scss';

interface UiDesignSwitcherRedesignedProps {
    className?: string;
    profileData?: Profile;
}

export const UiDesignSwitcherRedesigned = memo((props: UiDesignSwitcherRedesignedProps) => {
    const { className, profileData } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const userData = useSelector(getUserAuthData);
    const [canEditSettings, setCanEditSettings] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');

    const canEdit = userData?.id === profileData?.id;

    const btnEditMods: Mods = {
        [cls.disabled]: !canEdit,
    };

    const onBtnEditSettings = () => setCanEditSettings((prev) => !prev);

    const onChangeDesign = async (value: string) => {
        if (userData) {
            setIsLoading(true);
            await dispatch(updateFeatureFlags({
                userId: userData.id,
                newFeature: {
                    isAppRedesigned: value === 'new',
                },
            })).unwrap();
            setIsLoading(false);
        }
    };

    const items = [
        {
            content: t('Новый'),
            value: 'new',
        },
        {
            content: t('Старый'),
            value: 'old',
        },
    ];

    return (
        <CardUI padding="16" gap="16" borderRadius="16" className={cls.btnsBlock}>
            <VStack gap="8">
                <Text ui={t('Настройки приложения')} variant="ui" />
                <Button
                    className={classNames('', btnEditMods, [])}
                    variant={!canEditSettings ? 'primary' : 'auth'}
                    onClick={onBtnEditSettings}
                >
                    {!canEditSettings ? t('Разблокировать') : t('Заблокировать')}
                </Button>
            </VStack>
            <VStack gap="8">
                <Text ui={t('Дизайн приложения')} variant="ui" />
                {isLoading
                    ? <Skeleton width="100%" height={40} borderRadius="8px" />
                    : (
                        <ListBox
                            items={items}
                            currentValue={isAppRedesigned ? 'new' : 'old'}
                            onChange={onChangeDesign}
                            readonly={!canEditSettings}
                        />
                    )}

            </VStack>
        </CardUI>
    );
});
