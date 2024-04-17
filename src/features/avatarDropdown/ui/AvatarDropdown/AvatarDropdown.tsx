import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/user';
import { AppRoutePaths } from '@/shared/const/routerConsts';
import { ToggleFeatures } from '@/shared/lib/features';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { DropDown as DropDownDeprecated, MenuDropdownItem } from '@/shared/ui/deprecated/Popups';
import { Avatar as AvatarRedesigned } from '@/shared/ui/redesigned/Avatar';
import { DropDown as DropDownRedesigned } from '@/shared/ui/redesigned/Popups';
// eslint-disable-next-line baryshewww/layers-import
import { scrollSaveActions } from '@/widgets/page';

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
        dispatch(scrollSaveActions.resetScrollPosition());
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
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <DropDownRedesigned
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
                    trigger={<AvatarRedesigned size={40} src={authData.avatar} />}
                />
            )}
            off={(
                <DropDownDeprecated
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
                    trigger={<AvatarDeprecated size={22} src={authData.avatar} />}
                />
            )}
        />
    );
});
