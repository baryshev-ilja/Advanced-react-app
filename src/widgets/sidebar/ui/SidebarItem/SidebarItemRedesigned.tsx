import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { SidebarItemType } from '../../model/types/sidebar';

import { getUserAuthData } from '@/entities/user';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink/AppLink';
import { HStack } from '@/shared/ui/deprecated/Stack';

import cls from './SidebarItemRedesigned.module.scss';

interface SidebarItemRedesignedProps {
    item: SidebarItemType;
}

export const SidebarItemRedesigned = (props: SidebarItemRedesignedProps) => {
    const {
        item,
    } = props;
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            className={classNames('', {}, [])}
            to={item.path}

        >
            <HStack gap="12">
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </HStack>
        </AppLink>
    );
};
