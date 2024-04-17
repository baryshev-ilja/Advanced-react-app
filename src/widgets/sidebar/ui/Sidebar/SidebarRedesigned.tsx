import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItemRedesigned } from '../SidebarItem/SidebarItemRedesigned';

import { ArticleView } from '@/entities/article';
import { getUserAuthData } from '@/entities/user';
import { ToggleViewRedesigned } from '@/features/toggleViewArticleList';
// eslint-disable-next-line baryshewww/layers-import
import { getArticlesPageView, articlesPageActions } from '@/pages/articlesPage';
import AddIcon from '@/shared/assets/newIcons/add-icon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/redesigned/Button';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ThemeSwitcher } from '@/shared/ui/redesigned/ThemeSwitcher';

import cls from './SidebarRedesigned.module.scss';

interface SidebarRedesignedProps {
    className?: string;
}

export const SidebarRedesigned = memo((props: SidebarRedesignedProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const sidebarItemsList = useSelector(getSidebarItems);
    const isAuth = useSelector(getUserAuthData);
    const view = useSelector(getArticlesPageView);

    const itemsList = useMemo(() => (sidebarItemsList.map((item) => (
        <SidebarItemRedesigned
            item={item}
            key={item.path}
        />
    ))), [sidebarItemsList]);

    const onClickViewHandler = useCallback((newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
    }, [dispatch]);

    return (
        <VStack gap="32" className={classNames(cls.sidebarRedesigned, {}, [className])}>
            <CardUI className={cls.uiBlock} padding="16" borderRadius="16">
                <VStack gap="8">
                    <span className={cls.titleSidebarBlock}>{t('Выбор темы')}</span>
                    <HStack justify="between">
                        <ThemeSwitcher />
                        <ToggleViewRedesigned view={view} onClickView={onClickViewHandler} />
                    </HStack>
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
