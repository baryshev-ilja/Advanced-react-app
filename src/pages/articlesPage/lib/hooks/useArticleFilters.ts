import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getArticlesPageView,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
} from '../../model/selectors/getArticlesPageSelectors';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';

import { ArticleSortTypes, ArticleTypes, ArticleView } from '@/entities/article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TypesOfOrders } from '@/shared/types/orderTypes';
import { TabsItem } from '@/shared/ui/deprecated/Tabs';
import { scrollSaveActions } from '@/widgets/page';

export function useArticleFilters(pathname: string) {
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
        dispatch(scrollSaveActions.resetScrollPositionForPage({ path: pathname }));
        fetchData();
    }, [dispatch, fetchData, pathname]);

    const orderFilterHandler = useCallback((newOrder: TypesOfOrders) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        dispatch(scrollSaveActions.resetScrollPositionForPage({ path: pathname }));
        fetchData();
    }, [dispatch, fetchData, pathname]);

    const changeTypeTabsHandler = useCallback((tab: TabsItem<ArticleTypes>) => {
        dispatch(articlesPageActions.setType(tab.value));
        dispatch(articlesPageActions.setPage(1));
        dispatch(scrollSaveActions.resetScrollPositionForPage({ path: pathname }));
        fetchData();
    }, [dispatch, fetchData, pathname]);

    const changeSearchHandler = useCallback((newValue: string) => {
        dispatch(articlesPageActions.setSearch(newValue));
        dispatch(articlesPageActions.setPage(1));
        dispatch(scrollSaveActions.resetScrollPositionForPage({ path: pathname }));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch, pathname]);

    const typesTabs = useMemo<TabsItem<ArticleTypes>[]>(
        () => [
            {
                value: ArticleTypes.ALL,
                content: t('Все статьи'),
            },
            {
                value: ArticleTypes.HTML,
                content: t('HTML'),
            },
            {
                value: ArticleTypes.CSS,
                content: t('CSS'),
            },
            {
                value: ArticleTypes.JS,
                content: t('JavaScript'),
            },
            {
                value: ArticleTypes.WEBPACK,
                content: t('Webpack'),
            },
        ],
        [t],
    );

    return {
        view,
        sort,
        order,
        search,
        type,
        typesTabs,
        onClickViewHandler,
        sortFilterHandler,
        orderFilterHandler,
        changeTypeTabsHandler,
        changeSearchHandler,
    };
}
