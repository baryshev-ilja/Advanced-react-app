import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/article/ui/ArticleList/ArticleList';
import { VStack } from '@/shared/ui/Stack';
import { DynamicReducerLoad, ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';
import { ArticleListItemSkeleton } from '@/entities/article';
import { articleRecommendationsReducer } from '../../model/slice/ArticleDetailsRecomendationSlice';
import cls from './ArticleRecommendationList.module.scss';
import { useRecommendationList } from '../../api/articleRecommendationApi';

interface ArticleRecommendationListProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsRecommendations: articleRecommendationsReducer,
};

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articlesData, isLoading } = useRecommendationList(4);

    const articleRecommendationSkeletons = (
        <div className={cls.skeletons}>
            <ArticleListItemSkeleton view="GRID" />
            <ArticleListItemSkeleton view="GRID" />
            <ArticleListItemSkeleton view="GRID" />
        </div>
    );

    return (
        <DynamicReducerLoad reducers={reducers}>
            <VStack gap="8" max className={classNames(cls.recommendationList, {}, [className])}>
                <Text title={t('Рекомендуем')} size={TextSize.L} />
                {isLoading && articleRecommendationSkeletons}
                {articlesData && (
                    <ArticleList
                        className={cls.recommendations}
                        articles={articlesData}
                        view="GRID"
                        target="_blank"
                    />
                )}
            </VStack>
        </DynamicReducerLoad>
    );
});
