import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ToggleViewArticleList } from 'features/ToggleViewArticleList';
import { ArticleView } from 'entities/Article';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/getArticlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { SortByFiltersArticleList } from 'features/SortArticleList';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { ArticleSortTypes } from 'entities/Article/model/types/article';
import { TypesOfOrders } from 'shared/types';
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

    const onClickViewHandler = useCallback((newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
    }, [dispatch]);

    const sortFilterHandler = useCallback((newSort: ArticleSortTypes) => {
        dispatch(articlesPageActions.setSort(newSort));
    }, [dispatch]);

    const orderFilterHandler = useCallback((newOrder: TypesOfOrders) => {
        dispatch(articlesPageActions.setOrder(newOrder));
    }, [dispatch]);

    const changeSearchHandler = useCallback((newValue: string) => {
        dispatch(articlesPageActions.setSearch(newValue));
    }, [dispatch]);

    return (
        <div className={classNames(cls.articlesPageFilters, {}, [className])}>
            <div className={cls.articlesPageFilters_wrapper}>
                <SortByFiltersArticleList
                    orderValue={order}
                    sortValue={sort}
                    onChangeOrder={orderFilterHandler}
                    onChangeSort={sortFilterHandler}
                />
                <ToggleViewArticleList view={view} onClickView={onClickViewHandler} />
            </div>
            <Card className={cls.inputSearch_wrapper}>
                <Input
                    value={search}
                    onChange={changeSearchHandler}
                    labelElement={t('Поиск')}
                />
            </Card>
        </div>
    );
});
