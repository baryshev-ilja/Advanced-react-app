import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItemRedesigned } from '../SidebarItem/SidebarItemRedesigned';

import { getUserAuthData } from '@/entities/user';
import AddIcon from '@/shared/assets/newIcons/add-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { ThemeSwitcher } from '@/shared/ui/redesigned/ThemeSwitcher';

import cls from './SidebarRedesigned.module.scss';

interface SidebarRedesignedProps {
    className?: string;
}

export const SidebarRedesigned = memo((props: SidebarRedesignedProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const sidebarItemsList = useSelector(getSidebarItems);
    const isAuth = useSelector(getUserAuthData);

    const itemsList = useMemo(() => (sidebarItemsList.map((item) => (
        <SidebarItemRedesigned
            item={item}
            key={item.path}
        />
    ))), [sidebarItemsList]);

    return (
        <VStack gap="32" className={classNames(cls.sidebarRedesigned, {}, [className])}>
            <CardUI className={cls.uiBlock}>
                <VStack gap="8">
                    <span className={cls.titleSidebarBlock}>{t('Выбор темы')}</span>
                    <HStack justify="between">
                        <ThemeSwitcher />
                    </HStack>
                </VStack>
            </CardUI>
            <VStack align="start" tagName="nav">
                {itemsList}
            </VStack>
            {isAuth && (
                <Button fullWidth>
                    {t('Создать статью')}
                    <Icon className={cls.iconAdd} Svg={AddIcon} width={12} height={12} />
                </Button>
            )}
        </VStack>

    );
});
