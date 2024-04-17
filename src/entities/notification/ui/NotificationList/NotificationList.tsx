import { memo } from 'react';

import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data: notifications, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack gap="8" className={classNames(cls.notificationList, {}, [className])}>
                <Skeleton width="100%" borderRadius="8px" height="100px" />
                <Skeleton width="100%" borderRadius="8px" height="100px" />
                <Skeleton width="100%" borderRadius="8px" height="100px" />
            </VStack>
        );
    }

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <VStack gap="24" className={classNames(cls.notificationList, {}, [className])}>
                    {notifications?.map((item) => (
                        <NotificationItem key={item.id} item={item} />
                    ))}
                </VStack>
            )}
            off={(
                <VStack gap="8" className={classNames(cls.notificationList, {}, [className])}>
                    {notifications?.map((item) => (
                        <NotificationItem key={item.id} item={item} />
                    ))}
                </VStack>
            )}
        />
    );
});
