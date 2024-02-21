import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { DynamicReducerLoad, ReducersList } from 'shared/lib/HOC/DynamicReducerLoad';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ToggleViewArticleList } from 'features/ToggleViewArticleList';
import { useCallback } from 'react';
import { ArticleView } from 'entities/Article';
import { Page } from 'widgets/Page/ui/Page';
import { initArticlesList } from '../../model/services/initArticlesList/initArticlesList';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticleComments,
} from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPageSelectors';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    const onClickViewHandler = useCallback((newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesList());
    });

    return (
        <DynamicReducerLoad reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames(cls.articlesPage, {}, [className])}
                onEndScroll={onLoadNextPart}
            >
                <ToggleViewArticleList view={view} onClickView={onClickViewHandler} />
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicReducerLoad>
    );
};

export default ArticlesPage;
