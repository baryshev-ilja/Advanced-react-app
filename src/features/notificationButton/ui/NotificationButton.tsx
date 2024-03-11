import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/notification';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = (props: NotificationButtonProps) => {
    const { className } = props;

    return (
        <Popover
            className={classNames(cls.notificationButton, {}, [className])}
            direction="bottomLeft"
            trigger={(
                <Button
                    theme={ButtonTheme.CLEAR}
                    tagName="span"
                >
                    <NotificationIcon />
                </Button>
            )}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
};
