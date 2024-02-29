import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import cls from './CommentForm.module.scss';

interface CommentFormProps {
    className?: string;
    text?: string;
    onChangeComment?: (value: string) => void;
    onSendComment?: () => void;
}

export const CommentForm = memo((props: CommentFormProps) => {
    const {
        className,
        text,
        onChangeComment,
        onSendComment,
    } = props;
    const { t } = useTranslation();

    return (
        <HStack justify="between" max align="center" className={classNames(cls.commentForm, {}, [className])}>
            <Input
                labelElement={t('Введите сообщение')}
                value={text}
                onChange={onChangeComment}
            />
            <Button
                onClick={onSendComment}
            >
                {t('Отправить')}
            </Button>
        </HStack>
    );
});
