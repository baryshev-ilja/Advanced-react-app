import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { SidebarItemType } from '../../model/types/sidebar';

import { getUserAuthData } from '@/entities/user';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

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
            activeClassName={cls.activeItem}

        >
            <div className={cls.item}>
                <Icon Svg={item.Icon} width={22} height={22} />
                <span className={cls.link}>{t(item.text)}</span>
            </div>
        </AppLink>
    );
};
