import { useCallback, useState } from 'react';

import { NotificationList } from '@/entities/notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import NotificationIconNew from '@/shared/assets/newIcons/notification-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';
import { Drawer as DrawerRedesigned } from '@/shared/ui/redesigned/Drawer';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover as PopoverRedesigned } from '@/shared/ui/redesigned/Popups';

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
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <ButtonRedesigned
                    variant="auth"
                    buttonPadding="8"
                    buttonWidth={40}
                    className={cls.buttonNotifications}
                    onClick={onOpenDrawer}
                    tagName={tagName || undefined}
                >
                    <Icon
                        className={cls.notificationIcon}
                        Svg={NotificationIconNew}
                        width={22}
                        height={22}
                    />
                </ButtonRedesigned>
            )}
            off={(
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    onClick={onOpenDrawer}
                    tagName={tagName || undefined}
                >
                    <NotificationIcon />
                </ButtonDeprecated>
            )}
        />

    );

    if (isMobile) {
        return (
            <ToggleFeatures
                name="isAppRedesigned"
                on={(
                    <div>
                        {returnTriggerBtn()}
                        <DrawerRedesigned isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationList />
                        </DrawerRedesigned>

                    </div>
                )}
                off={(
                    <div>
                        {returnTriggerBtn()}
                        <DrawerDeprecated isOpen={isOpen} onClose={onCloseDrawer}>
                            <NotificationList />
                        </DrawerDeprecated>

                    </div>
                )}
            />
        );
    }

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <PopoverRedesigned
                    className={classNames('', {}, [className])}
                    direction="bottomLeft"
                    trigger={returnTriggerBtn('span')}
                >
                    <NotificationList className={cls.notifications} />
                </PopoverRedesigned>
            )}
            off={(
                <PopoverDeprecated
                    className={classNames('', {}, [className])}
                    direction="bottomLeft"
                    trigger={returnTriggerBtn('span')}
                >
                    <NotificationList className={cls.notifications} />
                </PopoverDeprecated>
            )}
        />
    );
};
