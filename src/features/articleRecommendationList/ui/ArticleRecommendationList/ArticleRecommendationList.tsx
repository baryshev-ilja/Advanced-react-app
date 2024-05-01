import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useRecommendationList } from '../../api/articleRecommendationApi';
import { articleRecommendationsReducer } from '../../model/slice/ArticleDetailsRecomendationSlice';

import { ArticleList, ArticleListItemSkeleton } from '@/entities/article';
import { DynamicReducerLoad, ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleListItemRedesignedSkeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

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
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <HStack gap="16" className={cls.skeletonsNew}>
                    <ArticleListItemRedesignedSkeleton view="GRID" />
                    <ArticleListItemRedesignedSkeleton view="GRID" />
                    <ArticleListItemRedesignedSkeleton view="GRID" />
                    <ArticleListItemRedesignedSkeleton view="GRID" />
                </HStack>
            )}
            off={(
                <div className={cls.skeletons}>
                    <ArticleListItemSkeleton view="GRID" />
                    <ArticleListItemSkeleton view="GRID" />
                    <ArticleListItemSkeleton view="GRID" />
                </div>
            )}
        />
    );

    return (
        <DynamicReducerLoad reducers={reducers}>
            <VStack
                gap="8"
                max
                className={classNames(cls.recommendationsWrapper, {}, [className])}
                data-testid="ArticleRecommendationList"
            >
                <Text title={t('Рекомендуем')} size={TextSize.L} />
                {isLoading && articleRecommendationSkeletons}
                {articlesData && (
                    <ArticleList
                        className={cls.recommendations}
                        isRecommendationsBlock
                        articles={articlesData}
                        view="GRID"
                        target="_blank"
                    />
                )}
            </VStack>
        </DynamicReducerLoad>
    );
});
