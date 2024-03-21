import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPageSelectors';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';

import { ArticleSortTypes, ArticleTypes, ArticleView } from '@/entities/article1';
import { SortByFiltersArticleList } from '@/features/sortArticleList1';
import { ToggleViewArticleList } from '@/features/toggleViewArticleList1';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TypesOfOrders } from '@/shared/types/orderTypes';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Tabs, TabsItem } from '@/shared/ui/Tabs';

import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onClickViewHandler = useCallback((newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
    }, [dispatch]);

    const sortFilterHandler = useCallback((newSort: ArticleSortTypes) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const orderFilterHandler = useCallback((newOrder: TypesOfOrders) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const changeTypeTabsHandler = useCallback((tab: TabsItem<ArticleTypes>) => {
        dispatch(articlesPageActions.setType(tab.value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const changeSearchHandler = useCallback((newValue: string) => {
        dispatch(articlesPageActions.setSearch(newValue));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const typesTabs = useMemo(() => Object.values(ArticleTypes)
        .reduce((acc: TabsItem<ArticleTypes>[], cur) => ([
            ...acc,
            {
                value: cur,
                content: t(cur, { ns: 'article' }),
            },
        ]), []), [t]);

    return (
        <VStack gap="16" max>
            <HStack justify="between" max>
                <SortByFiltersArticleList
                    orderValue={order}
                    sortValue={sort}
                    onChangeOrder={orderFilterHandler}
                    onChangeSort={sortFilterHandler}
                />
                <ToggleViewArticleList view={view} onClickView={onClickViewHandler} />
            </HStack>
            <Card className={cls.inputSearch_wrapper}>
                <Input
                    value={search}
                    onChange={changeSearchHandler}
                    labelElement={t('Поиск')}
                />
            </Card>
            <Tabs
                tabs={typesTabs}
                currentValue={type}
                onTabClick={changeTypeTabsHandler}
            />
        </VStack>
    );
});
