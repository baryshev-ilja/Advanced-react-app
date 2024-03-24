import { useSelector } from 'react-redux';

import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPageSelectors';
import { getArticlesPage } from '../../model/slice/articlesPageSlice';

import { ArticleList } from '@/entities/article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticlesInfiniteListProps {
    className?: string;
}

export const ArticlesInfiniteList = (props: ArticlesInfiniteListProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticlesPage.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    return (
        <ArticleList
            articles={articles}
            view={view}
            isLoading={isLoading}
        />
    );
};
