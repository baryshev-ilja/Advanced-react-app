import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortTypes } from '@/entities/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { TypesOfOrders } from '@/shared/types/orderTypes';
import { OptionsList, Select } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './SortByFiltersArticleList.module.scss';

interface SortArticleListProps {
    sortValue: ArticleSortTypes;
    orderValue: TypesOfOrders;
    onChangeSort: (value: ArticleSortTypes) => void;
    onChangeOrder: (value: TypesOfOrders) => void;
}

export const SortByFiltersArticleList = (props: SortArticleListProps) => {
    const {
        sortValue,
        orderValue,
        onChangeSort,
        onChangeOrder,
    } = props;
    const { t } = useTranslation();

    const optionsForOrderSelect = useMemo<OptionsList<TypesOfOrders>[]>(() => [
        {
            value: 'asc',
            content: t('Возрастанию'),
        },
        {
            value: 'desc',
            content: t('Убыванию'),
        },
    ], [t]);

    const optionsForSortSelect = useMemo<OptionsList<ArticleSortTypes>[]>(() => [
        {
            value: ArticleSortTypes.CREATED,
            content: t('Дате создания'),
        },
        {
            value: ArticleSortTypes.TITLE,
            content: t('Названию'),
        },
        {
            value: ArticleSortTypes.VIEWS,
            content: t('Просмотрам'),
        },
    ], [t]);

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <VStack gap="8">
                    <ListBox
                        className={cls.fullWidth}
                        currentValue={sortValue}
                        items={optionsForSortSelect}
                        onChange={onChangeSort}
                        direction="bottomLeft"
                    />
                    <ListBox
                        className={cls.fullWidth}
                        currentValue={orderValue}
                        items={optionsForOrderSelect}
                        onChange={onChangeOrder}
                        direction="bottomLeft"
                    />
                </VStack>
            )}
            off={(
                <HStack gap="16">
                    <Select
                        value={sortValue}
                        options={optionsForSortSelect}
                        label={t('Сортировать по')}
                        onChange={onChangeSort}
                    />
                    <Select
                        value={orderValue}
                        options={optionsForOrderSelect}
                        label={t('по')}
                        onChange={onChangeOrder}
                    />
                </HStack>
            )}
        />
    );
};
