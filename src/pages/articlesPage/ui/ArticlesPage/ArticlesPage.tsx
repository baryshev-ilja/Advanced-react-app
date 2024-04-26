import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesList } from '../../model/services/initArticlesList/initArticlesList';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

import { ArticlesPageGreeting } from '@/features/articlesPageGreeting';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DynamicReducerLoad, ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/redesigned/Stack';
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

    const content = (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <StickyContentLayout
                    content={(
                        <Page
                            data-testid="Articles-page"
                            className={classNames('', {}, [className])}
                            onEndScroll={onLoadNextPart}
                        >
                            <ArticlesInfiniteList />
                            <ArticlesPageGreeting />
                        </Page>
                    )}
                    rightbar={<FiltersContainer />}
                />
            )}
            off={(
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
            )}
        />
    );

    return (
        <DynamicReducerLoad reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicReducerLoad>
    );
};

export default ArticlesPage;
