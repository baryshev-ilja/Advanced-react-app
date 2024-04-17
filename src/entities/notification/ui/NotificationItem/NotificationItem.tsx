import { memo } from 'react';

import type { NotificationType } from '../../model/types/notificationType';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { CardUI } from '@/shared/ui/redesigned/CardUI/CardUI';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: NotificationType;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const content = (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <CardUI
                    className={classNames(cls.notificationItemRedesigned, {}, [className])}
                >
                    <TextRedesigned title={item.title} description={item.description} />
                </CardUI>
            )}
            off={(
                <CardDeprecated
                    theme={CardTheme.NORMAL}
                    className={classNames(cls.notificationItem, {}, [className])}
                >
                    <TextDeprecated title={item.title} description={item.description} />
                </CardDeprecated>
            )}
        />
    );

    if (item.href) {
        return (
            <ToggleFeatures
                name="isAppRedesigned"
                on={(
                    <a
                        href={item.href}
                        target="_blank"
                        className={classNames(cls.linkRedesigned, {}, [className])}
                        rel="noreferrer"
                    >
                        {content}
                    </a>
                )}
                off={(
                    <a
                        href={item.href}
                        target="_blank"
                        className={classNames(cls.link, {}, [className])}
                        rel="noreferrer"
                    >
                        {content}
                    </a>
                )}
            />
        );
    }

    return content;
});
