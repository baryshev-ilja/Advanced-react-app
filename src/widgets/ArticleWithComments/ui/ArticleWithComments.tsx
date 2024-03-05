import { ArticleDetails, getArticleDetailsData, getArticleDetailsIsLoading } from 'entities/Article';
import { useSelector } from 'react-redux';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import AddCommentsForArticle from 'features/AddComments/ui/AddCommentsForArticle/AddCommentsForArticle';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { DynamicReducerLoad, ReducersList } from 'shared/lib/HOC/DynamicReducerLoad';
import { VStack } from 'shared/ui/Stack';
import { rtkApi } from 'shared/api/rtkApi';
import {
    fetchArticleRecommendations,
} from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
    articleRecommendationsReducer,
    getArticleRecommendations,
} from '../model/slice/ArticleDetailsRecomendationSlice';
import {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading,
} from '../model/selectors/getRecommendations';
import cls from './ArticleWithComments.module.scss';

interface ArticleWithCommentsProps {
    id: string;
}

const reducers: ReducersList = {
    articleDetailsRecommendations: articleRecommendationsReducer,
};

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

const useRecommendationList = recommendationsApi.useGetArticleRecommendationListQuery;

export const ArticleWithComments = (props: ArticleWithCommentsProps) => {
    const { id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const recommendationsError = useSelector(getArticleRecommendationsError);
    const { data: articles } = useRecommendationList(3);

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations());
    });

    return (
        <DynamicReducerLoad reducers={reducers}>
            <VStack gap="32">
                <ArticleDetails id={id} isLoading={isLoading} data={article} />
                <VStack gap="8" max>
                    <Text title={t('Рекомендуем')} size={TextSize.L} />
                    <div className={cls.recommendationList}>
                        {articles && (
                            <ArticleList
                                className={cls.recommendations}
                                articles={articles}
                                view="GRID"
                                target="_blank"
                            />
                        )}
                    </div>
                </VStack>
                {article
                    && (
                        <VStack gap="16" max>
                            <Text title={t('Комментарии')} size={TextSize.L} />
                            <AddCommentsForArticle id={id} />
                        </VStack>
                    )}
            </VStack>
        </DynamicReducerLoad>
    );
};
