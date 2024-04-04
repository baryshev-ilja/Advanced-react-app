import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItemRedesigned } from '../SidebarItem/SidebarItemRedesigned';

import { classNames } from '@/shared/lib/classNames/classNames';
import { CardUI } from '@/shared/ui/CardUI';
import { VStack } from '@/shared/ui/Stack';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';

import cls from './SidebarRedesigned.module.scss';

interface SidebarRedesignedProps {
    className?: string;
}

export const SidebarRedesigned = memo((props: SidebarRedesignedProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const sidebarItemsList = useSelector(getSidebarItems);

    const itemsList = useMemo(() => (sidebarItemsList.map((item) => (
        <SidebarItemRedesigned
            item={item}
            key={item.path}
        />
    ))), [sidebarItemsList]);

    return (
        <div className={classNames(cls.sidebarRedesigned, {}, [className])}>
            <CardUI className={cls.uiBlock}>
                <ThemeSwitcher />
            </CardUI>
            <VStack align="start" gap="4" tagName="nav">
                {itemsList}
            </VStack>
        </div>

    );
});
