import { useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/notification';
import { Popover } from '@/shared/ui/Popups';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/Drawer';
import { AnimationProvider } from '@/shared/lib/HOC/AnimationProvider/AnimationProvider';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = (props: NotificationButtonProps) => {
    const { className } = props;
    const isMobile = useDevice();

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const returnTriggerBtn = (tagName?: keyof HTMLElementTagNameMap) => (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onOpenDrawer}
            tagName={tagName || undefined}
        >
            <NotificationIcon />
        </Button>
    );

    if (isMobile) {
        return (
            <div>
                {returnTriggerBtn()}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>

            </div>
        );
    }

    return (
        <Popover
            className={classNames(cls.notificationButton, {}, [className])}
            direction="bottomLeft"
            trigger={returnTriggerBtn('span')}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
};
