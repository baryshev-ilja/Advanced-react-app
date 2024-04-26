import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Input } from '@/shared/ui/deprecated/Input';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './RatingCard.module.scss';

interface RatingCardProps {
    className?: string;
    title: string;
    feedbackTitle?: string;
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
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const isMobile = useDevice();

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

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedback}
                labelElement={t('Ваш отзыв')}
                data-testid="CardRatingFeedback.Input"
            />
        </>
    );

    return (
        <Card
            className={classNames(cls.ratingCard, {}, [className])}
            data-testid="CardRating"
        >
            <VStack max gap="16" align="center">
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount} />
            </VStack>
            {!isMobile && (
                <Modal isOpen={isOpenModal}>
                    <VStack gap="32">
                        {modalContent}
                        <HStack gap="16" justify="end">
                            <Button
                                onClick={cancelHandle}
                                theme={ButtonTheme.OUTLINE_ERROR}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                onClick={acceptHandle}
                                data-testid="CardRatingFeedback.Send"
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            )}
            {isMobile && (
                <Drawer isOpen={isOpenModal} onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <Button
                            fullWidth
                            onClick={acceptHandle}
                            data-testid="CardRatingFeedback.Send"
                        >
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            )}
        </Card>
    );
});
