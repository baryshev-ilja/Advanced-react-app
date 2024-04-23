import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItemRedesigned } from '../SidebarItem/SidebarItemRedesigned';

import { getUserAuthData } from '@/entities/user';
import AddIcon from '@/shared/assets/newIcons/add-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { VStack } from '@/shared/ui/redesigned/Stack';
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
            <CardUI className={cls.uiBlock} padding="16" borderRadius="16">
                <VStack gap="8">
                    <span className={cls.titleSidebarBlock}>{t('Выбор темы')}</span>
                    <ThemeSwitcher />
                    <span style={{ marginTop: '8px' }} className={cls.titleSidebarBlock}>{t('Перевести на')}</span>
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
