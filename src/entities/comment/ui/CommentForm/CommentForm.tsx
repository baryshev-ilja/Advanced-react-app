import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button as ButtonRedesigned } from '@/shared/ui/redesigned/Button';
import { Input as InputRedesigned } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/redesigned/Stack';

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

    const content = (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <>
                    <InputRedesigned
                        value={text}
                        onChange={onChangeComment}
                        placeholder={t('Написать комментарий')}
                        data-testid="ArticleCommentForm.Input"
                    />
                    <ButtonRedesigned
                        onClick={onSendComment}
                        data-testid="ArticleCommentForm.Button"
                    >
                        {t('Отправить')}
                    </ButtonRedesigned>
                </>
            )}
            off={(
                <>
                    <InputDeprecated
                        labelElement={t('Введите сообщение')}
                        value={text}
                        onChange={onChangeComment}
                        data-testid="ArticleCommentForm.Input"
                    />
                    <ButtonDeprecated
                        onClick={onSendComment}
                        data-testid="ArticleCommentForm.Button"
                    >
                        {t('Отправить')}
                    </ButtonDeprecated>
                </>
            )}
        />
    );

    const formClasses = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => `${cls.commentFormNew}`,
        off: () => `${cls.commentForm}`,
    });

    return (
        <HStack
            justify="between"
            align="center"
            max
            className={classNames(formClasses, {}, [className])}
        >
            {content}
        </HStack>
    );
});
