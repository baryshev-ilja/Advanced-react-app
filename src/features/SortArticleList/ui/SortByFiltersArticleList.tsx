import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { OptionsList, Select } from 'shared/ui/Select/Select';
import { useMemo } from 'react';
import { ArticleSortTypes } from 'entities/Article/model/types/article';
import { TypesOfOrders } from 'shared/types';
import cls from './SortByFiltersArticleList.module.scss';

interface SortArticleListProps {
    className?: string;
    sortValue: ArticleSortTypes;
    orderValue: TypesOfOrders;
    onChangeSort: (value: ArticleSortTypes) => void;
    onChangeOrder: (value: TypesOfOrders) => void;
}

export const SortByFiltersArticleList = (props: SortArticleListProps) => {
    const {
        className,
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
        <div className={classNames(cls.sortArticleList, {}, [className])}>
            <Select
                className={cls.select}
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
        </div>
    );
};
