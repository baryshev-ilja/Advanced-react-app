import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Button } from '@/shared/ui/redesigned/Button';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Input } from '@/shared/ui/redesigned/Input';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Text } from '@/shared/ui/redesigned/Text';

interface RatingCardRedesignedProps {
    className?: string;
    starsCount: number;
    title: string;
    isUiTitle?: boolean;
    feedbackTitle?: string;
    onSelectStars: (value: number) => void;
    isOpenModal: boolean;
    feedback: string;
    setFeedback: Dispatch<SetStateAction<string>>;
    cancelHandle: () => void;
    acceptHandle: () => void;
}

export const RatingCardRedesigned = (props: RatingCardRedesignedProps) => {
    const {
        className,
        starsCount,
        title,
        isUiTitle,
        feedbackTitle,
        feedback,
        setFeedback,
        onSelectStars,
        cancelHandle,
        acceptHandle,
        isOpenModal,
    } = props;
    const { t } = useTranslation();
    const isMobile = useDevice();

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
        <CardUI
            gap="16"
            className={className}
            data-testid="CardRating"
        >
            <VStack max gap="8" align="center">
                {isUiTitle
                    ? (
                        <Text
                            ui={starsCount ? t('Спасибо за оценку!') : title}
                            variant="primary"
                        />
                    ) : (
                        <Text
                            title={starsCount ? t('Спасибо за оценку!') : title}
                            variant="primary"
                        />
                    )}

                <StarRating size={30} onSelect={onSelectStars} selectedStars={starsCount} />
            </VStack>
            {!isMobile && (
                <Modal isOpen={isOpenModal}>
                    <CardUI padding="16" gap="16">
                        {modalContent}
                        <HStack gap="16" justify="end">
                            <Button
                                onClick={cancelHandle}
                                variant="auth"
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
                    </CardUI>
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
        </CardUI>
    );
};
