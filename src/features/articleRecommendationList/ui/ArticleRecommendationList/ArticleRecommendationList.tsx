import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useRecommendationList } from '../../api/articleRecommendationApi';
import { articleRecommendationsReducer } from '../../model/slice/ArticleDetailsRecomendationSlice';

import { ArticleList, ArticleListItemSkeleton } from '@/entities/article';
import { DynamicReducerLoad, ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';

import cls from './ArticleRecommendationList.module.scss';

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
            <VStack
                gap="8"
                max
                className={classNames(cls.recommendationList, {}, [className])}
                data-testid="ArticleRecommendationList"
            >
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
