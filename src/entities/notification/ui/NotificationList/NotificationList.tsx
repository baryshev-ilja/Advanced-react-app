import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';
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
        <VStack gap="8" className={classNames(cls.notificationList, {}, [className])}>
            {notifications?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
