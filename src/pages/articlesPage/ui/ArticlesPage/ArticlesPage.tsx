import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesList } from '../../model/services/initArticlesList/initArticlesList';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

import { ArticlesPageGreeting } from '@/features/articlesPageGreeting';
import { DynamicReducerLoad, ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/page';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesList(searchParams));
    });

    return (
        <DynamicReducerLoad reducers={reducers} removeAfterUnmount={false}>
            <Page
                data-testid="Articles-page"
                className={classNames('', {}, [className])}
                onEndScroll={onLoadNextPart}
            >
                <VStack gap="24">
                    <ArticlesPageFilters />
                    <ArticlesInfiniteList />
                </VStack>
                <ArticlesPageGreeting />
            </Page>
        </DynamicReducerLoad>
    );
};

export default ArticlesPage;
