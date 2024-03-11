import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import type { NotificationType } from '../../model/types/notificationType';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: NotificationType;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const content = (
        <Card
            theme={CardTheme.NORMAL}
            className={classNames(cls.notificationItem, {}, [className])}
        >
            <Text title={item.title} description={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a
                href={item.href}
                target="_blank"
                className={classNames(cls.link, {}, [className])}
                rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return content;
});
