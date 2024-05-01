import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/user';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getFeatureFlag, updateFeatureFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ListBox } from '@/shared/ui/deprecated/Popups';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface UiDesignSwitcherDeprecatedProps {
    className?: string;
}

export const UiDesignSwitcherDeprecated = ({ className }: UiDesignSwitcherDeprecatedProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const userData = useSelector(getUserAuthData);
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <HStack max className={classNames('', {}, [className])}>
            {isLoading
                ? <Skeleton width={100} height={20} />
                : (
                    <ListBox
                        label={t('Дизайн приложения')}
                        items={items}
                        currentValue={isAppRedesigned ? 'new' : 'old'}
                        onChange={onChangeDesign}
                    />
                )}
        </HStack>
    );
};
