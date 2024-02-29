import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { DynamicReducerLoad, ReducersList } from 'shared/lib/HOC/DynamicReducerLoad';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useCallback } from 'react';
import { Page } from 'widgets/Page/ui/Page';
import { useSearchParams } from 'react-router-dom';
import { VStack } from 'shared/ui/Stack';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { initArticlesList } from '../../model/services/initArticlesList/initArticlesList';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageReducer, getArticleComments } from '../../model/slice/articlesPageSlice';
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
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesList(searchParams));
    });

    return (
        <DynamicReducerLoad reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames(cls.articlesPage, {}, [className])}
                onEndScroll={onLoadNextPart}
            >
                <VStack gap="24">
                    <ArticlesPageFilters />
                    <ArticleList
                        articles={articles}
                        view={view}
                        isLoading={isLoading}
                    />
                </VStack>
            </Page>
        </DynamicReducerLoad>
    );
};

export default ArticlesPage;
