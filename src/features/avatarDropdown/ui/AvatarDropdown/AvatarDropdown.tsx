import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import {
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/user';
import { AppRoutePaths } from '@/shared/const/routerConsts';
import { Avatar } from '@/shared/ui/Avatar';
import { DropDown, MenuDropdownItem } from '@/shared/ui/Popups';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    const adminPanelLinkObj: MenuDropdownItem = {
        content: t('Админка'),
        href: `${AppRoutePaths.adminPanel()}`,
        tagName: 'span',
    };

    if (!authData) {
        return null;
    }

    return (
        <DropDown
            direction="bottomLeft"
            items={[
                ...(isAdminPanelAvailable ? [adminPanelLinkObj] : []),
                {
                    content: t('Профиль'),
                    href: `${AppRoutePaths.profile(authData.id)}`,
                    tagName: 'span',
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={22} src={authData.avatar} />}
        />
    );
});
