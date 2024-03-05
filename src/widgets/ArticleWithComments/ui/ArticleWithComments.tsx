import { ArticleDetails, getArticleDetailsData, getArticleDetailsIsLoading } from 'entities/article';
import { useSelector } from 'react-redux';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import AddCommentsForArticle from 'features/addComments/ui/AddCommentsForArticle/AddCommentsForArticle';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleList } from 'entities/article/ui/ArticleList/ArticleList';
import { DynamicReducerLoad, ReducersList } from 'shared/lib/HOC/DynamicReducerLoad';
import { VStack } from 'shared/ui/Stack';
import { rtkApi } from 'shared/api/rtkApi';
import { ArticleRecommendationList } from 'features/articleRecommendationList';
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

export const ArticleWithComments = (props: ArticleWithCommentsProps) => {
    const { id } = props;
    const { t } = useTranslation();
    // const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    // const recommendations = useSelector(getArticleRecommendations.selectAll);
    // const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    // const recommendationsError = useSelector(getArticleRecommendationsError);

    // useInitialEffect(() => {
    //     dispatch(fetchArticleRecommendations());
    // });

    return (

        <VStack gap="32">
            <ArticleDetails id={id} isLoading={isLoading} data={article} />
            <ArticleRecommendationList />
            {article
                    && (
                        <VStack gap="16" max>
                            <Text title={t('Комментарии')} size={TextSize.L} />
                            <AddCommentsForArticle id={id} />
                        </VStack>
                    )}
        </VStack>

    );
};
