import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack } from '@/shared/ui/deprecated/Stack';

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
                data-testid="ArticleCommentForm.Input"
            />
            <Button
                onClick={onSendComment}
                data-testid="ArticleCommentForm.Button"
            >
                {t('Отправить')}
            </Button>
        </HStack>
    );
});
