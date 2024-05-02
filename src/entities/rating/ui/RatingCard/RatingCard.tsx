import { memo, useCallback, useState } from 'react';

import { RatingCardDeprecated } from './RatingCardDeprecated/RatingCardDeprecated';
import { RatingCardRedesigned } from './RatingCardRedesigned/RatingCardRedesigned';

import { ToggleFeatures } from '@/shared/lib/features';

interface RatingCardProps {
    className?: string;
    title: string;
    feedbackTitle?: string;
    isUiTitle?: boolean;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        isUiTitle,
        onCancel,
        onAccept,
        rate = 0,
    } = props;

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarCount: number) => {
        setStarsCount(selectedStarCount);
        if (hasFeedback) {
            setIsOpenModal(true);
        } else {
            onAccept?.(selectedStarCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsOpenModal(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsOpenModal(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const ratingCardProps = {
        starsCount,
        title,
        feedbackTitle,
        isUiTitle,
        onSelectStars,
        isOpenModal,
        feedback,
        setFeedback,
        cancelHandle,
        acceptHandle,
    };

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={<RatingCardRedesigned {...ratingCardProps} />}
            off={<RatingCardDeprecated {...ratingCardProps} />}
        />
    );
});
