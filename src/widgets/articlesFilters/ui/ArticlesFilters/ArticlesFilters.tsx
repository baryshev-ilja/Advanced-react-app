import { useTranslation } from 'react-i18next';

import { ArticleSortTypes, ArticleView } from '@/entities/article';
import { SortByFiltersArticleList } from '@/features/sortArticleList';
import { ToggleViewRedesigned } from '@/features/toggleViewArticleList';
import { typedMemo } from '@/shared/const/typedMemo';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TypesOfOrders } from '@/shared/types/orderTypes';
import { Input } from '@/shared/ui/deprecated/Input';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Tabs, TabsItem } from '@/shared/ui/redesigned/Tabs';

import cls from './ArticlesFilters.module.scss';

interface ArticlesFiltersProps<T extends string> {
    className?: string;
    view: string;
    sort: ArticleSortTypes;
    order: TypesOfOrders;
    search: string | number;
    type: T;
    typesTabs: TabsItem<T>[];
    onClickView: (view: ArticleView) => void;
    onChangeSort: (value: ArticleSortTypes) => void;
    onChangeOrder: (value: TypesOfOrders) => void;
    onTabClick: (tab: TabsItem<T>) => void;
    onChangeSearch: (value: string) => void;
}

export const ArticlesFilters = typedMemo(<T extends string>(props: ArticlesFiltersProps<T>) => {
    const {
        className,
        view,
        sort,
        order,
        search,
        type,
        typesTabs,
        onClickView,
        onChangeSort,
        onChangeOrder,
        onTabClick,
        onChangeSearch,
    } = props;
    const { t } = useTranslation();
    return (
        <VStack gap="16" className={classNames(cls.articlesFilters, {}, [className])}>
            <CardUI gap="16" padding="16" borderRadius="16" className={cls.uiBlock}>
                <VStack gap="8">
                    <span>{t('Поиск')}</span>
                    <Input
                        value={search}
                        onChange={onChangeSearch}
                    />
                </VStack>
                <VStack gap="8">
                    <span>{t('Выбор отображения')}</span>
                    <ToggleViewRedesigned view={view} onClickView={onClickView} />
                </VStack>
                <VStack gap="8">
                    <span>{t('Сортировать по')}</span>
                    <SortByFiltersArticleList
                        orderValue={order}
                        sortValue={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                </VStack>
            </CardUI>
            <CardUI gap="16" padding="16" borderRadius="16" className={cls.uiBlock}>
                <Tabs
                    tabs={typesTabs}
                    currentValue={type}
                    onTabClick={onTabClick}
                />
            </CardUI>
        </VStack>
    );
});
