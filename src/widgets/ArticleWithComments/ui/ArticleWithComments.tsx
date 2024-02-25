import { ArticleDetails, getArticleDetailsData, getArticleDetailsIsLoading } from 'entities/Article';
import { useSelector } from 'react-redux';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import AddCommentsForArticle from 'features/AddComments/ui/AddCommentsForArticle/AddCommentsForArticle';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchArticleRecommendations,
} from 'widgets/ArticleWithComments/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
    articleRecommendationsReducer,
    getArticleRecommendations,
} from 'widgets/ArticleWithComments/model/slice/ArticleDetailsRecomendationSlice';
import {
    getArticleRecommendationsError,
    getArticleRecommendationsIsLoading,
} from 'widgets/ArticleWithComments/model/selectors/getRecommendations';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { DynamicReducerLoad, ReducersList } from 'shared/lib/HOC/DynamicReducerLoad';
import cls from './ArticleWithComments.module.scss';

interface ArticleWithCommentsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetailsRecommendations: articleRecommendationsReducer,
};

export const ArticleWithComments = (props: ArticleWithCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const recommendationsError = useSelector(getArticleRecommendationsError);

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations());
    });

    return (
        <DynamicReducerLoad reducers={reducers}>
            <ArticleDetails id={id} isLoading={isLoading} data={article} />
            <Text title={t('Рекомендуем')} />
            <div className={cls.recommendationList}>
                <ArticleList
                    className={cls.recommendations}
                    articles={recommendations}
                    view="GRID"
                    target="_blank"
                />
            </div>

            {article && <Text className={cls.comments} title={t('Комментарии')} size={TextSize.L} />}
            {article && <AddCommentsForArticle id={id} />}
        </DynamicReducerLoad>
    );
};
