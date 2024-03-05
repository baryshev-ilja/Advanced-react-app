import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { getUserAuthData } from 'entities/user';
import { useSelector } from 'react-redux';
import { HStack } from 'shared/ui/Stack';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean
}

export const SidebarItem = (props: SidebarItemProps) => {
    const {
        item,
        collapsed,
    } = props;
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            className={classNames('', { [cls.sidebarCollapsed]: collapsed })}
            to={item.path}

        >
            <HStack gap="12">
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </HStack>
        </AppLink>
    );
};
