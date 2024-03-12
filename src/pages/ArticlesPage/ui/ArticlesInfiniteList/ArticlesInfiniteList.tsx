import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ArticleList } from '@/entities/article';
import { initArticlesList } from '../../model/services/initArticlesList/initArticlesList';
import { getArticleComments } from '../../model/slice/articlesPageSlice';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/getArticlesPageSelectors';

interface ArticlesInfiniteListProps {
    className?: string;
    searchParams: URLSearchParams;
}

export const ArticlesInfiniteList = (props: ArticlesInfiniteListProps) => {
    const { className, searchParams } = props;

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    useInitialEffect(() => {
        dispatch(initArticlesList(searchParams));
    });

    return (
        <ArticleList
            articles={articles}
            view={view}
            isLoading={isLoading}
        />
    );
};
