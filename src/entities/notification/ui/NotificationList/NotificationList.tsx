import { memo } from 'react';

import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
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
            <ToggleFeatures
                name="isAppRedesigned"
                on={(
                    <VStack gap="8" className={classNames(cls.notificationList, {}, [className])}>
                        <SkeletonRedesigned width="100%" borderRadius="8px" height="100px" />
                        <SkeletonRedesigned width="100%" borderRadius="8px" height="100px" />
                        <SkeletonRedesigned width="100%" borderRadius="8px" height="100px" />
                    </VStack>
                )}
                off={(
                    <VStack gap="8" className={classNames(cls.notificationList, {}, [className])}>
                        <SkeletonDeprecated width="100%" borderRadius="8px" height="100px" />
                        <SkeletonDeprecated width="100%" borderRadius="8px" height="100px" />
                        <SkeletonDeprecated width="100%" borderRadius="8px" height="100px" />
                    </VStack>
                )}
            />
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
