import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useGetRateArticle, useRateArticle } from '../../api/articleRatingApi';

import { RatingCard } from '@/entities/rating';
import { getUserAuthData } from '@/entities/user';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();

    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetRateArticle({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        rateArticleMutation({
            userId: userData?.id ?? '',
            articleId,
            rate: starsCount,
            feedback,
        });
    }, [articleId, rateArticleMutation, userData?.id]);

    const onCancelHandle = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    const onAcceptHandle = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    if (isLoading) {
        return (
            <ToggleFeatures
                name="isAppRedesigned"
                on={(
                    <VStack gap="8" justify="center" align="center">
                        <SkeletonRedesigned width={150} height={24} borderRadius="24px" />
                        <SkeletonRedesigned width={232} height={40} borderRadius="8px" />
                    </VStack>
                )}
                off={<SkeletonDeprecated width="100%" height={140} />}
            />
        );
    }

    const rating = data?.[0];

    return (
        <RatingCard
            title={t('Пожалуйста, оцените статью')}
            feedbackTitle={t('Подскажите, пожалуйста, на какую тему стоит еще написать?')}
            hasFeedback
            rate={rating?.rate}
            onAccept={onAcceptHandle}
            onCancel={onCancelHandle}
        />
    );
});

export default ArticleRating;
