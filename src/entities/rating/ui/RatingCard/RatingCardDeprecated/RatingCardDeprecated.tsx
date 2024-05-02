import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Input } from '@/shared/ui/deprecated/Input';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/redesigned/StarRating';

interface RatingCardDeprecatedProps {
    className?: string;
    starsCount: number;
    title: string;
    feedbackTitle?: string;
    isUiTitle?: boolean;
    onSelectStars: (value: number) => void;
    isOpenModal: boolean;
    feedback: string;
    setFeedback: Dispatch<SetStateAction<string>>;
    cancelHandle: () => void;
    acceptHandle: () => void;
}

export const RatingCardDeprecated = (props: RatingCardDeprecatedProps) => {
    const {
        className,
        starsCount,
        title,
        feedbackTitle,
        isUiTitle,
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
        <Card
            className={className}
            data-testid="CardRating"
        >
            <VStack max gap="16" align="center">
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                <StarRating size={27} onSelect={onSelectStars} selectedStars={starsCount} />
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
};
