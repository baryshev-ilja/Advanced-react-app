import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleSortTypes } from '@/entities/article';
import { TypesOfOrders } from '@/shared/types/orderTypes';
import { OptionsList, Select } from '@/shared/ui/deprecated/Select';
import { HStack } from '@/shared/ui/deprecated/Stack';

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
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

    const optionsForSortSelect = useMemo<OptionsList<ArticleSortTypes>[]>(() => [
        {
            value: ArticleSortTypes.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortTypes.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortTypes.VIEWS,
            content: t('просмотрам'),
        },
    ], [t]);

    return (
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
    );
};
