import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useGetRateArticle, useRateArticle } from '../../api/articleRatingApi';

import { RatingCard } from '@/entities/rating';
import { getUserAuthData } from '@/entities/user1';
import { Skeleton } from '@/shared/ui/Skeleton';

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
        return <Skeleton width="100%" height={140} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            title={t('Ну что, как вам статья?')}
            feedbackTitle={t('Подскажите, пожалуйста, на какую тему стоит еще написать?')}
            hasFeedback
            rate={rating?.rate}
            onAccept={onAcceptHandle}
            onCancel={onCancelHandle}
        />
    );
});

export default ArticleRating;
