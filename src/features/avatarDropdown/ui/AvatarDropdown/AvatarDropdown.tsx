import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@/shared/ui/Avatar';
import { DropDown, MenuDropdownItem } from '@/shared/ui/Popups';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/user';
import { RoutePaths } from '@/shared/const/routerConsts';

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
        href: `${RoutePaths.admin_panel}`,
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
                    href: `${RoutePaths.profile}${authData.id}`,
                    tagName: 'span',
                },
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={20} src={authData.avatar} />}
        />
    );
});
