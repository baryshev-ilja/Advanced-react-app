import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/user';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/deprecated/Stack';

import cls from './Toolbar.module.scss';

interface ToolbarProps {
    className?: string;
}

export const Toolbar = (props: ToolbarProps) => {
    const { className } = props;
    const authData = useSelector(getUserAuthData);

    return (
        <div className={classNames(cls.toolbar, {}, [className])}>
            {authData && (
                <HStack gap="8">
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            )}
        </div>
    );
};
