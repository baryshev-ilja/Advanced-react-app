import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { CommentType } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

interface CommentListProps {
    comments?: CommentType[];
    loading: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { comments, loading } = props;
    const { t } = useTranslation();

    return (
        <VStack gap="8" max>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={loading}
                        comment={comment}
                    />
                ))
                : (
                    <ToggleFeatures
                        name="isAppRedesigned"
                        on={<TextRedesigned ui={t('Комментарии отсутствуют')} variant="ui" />}
                        off={<TextDeprecated description={t('Комментарии отсутствуют')} />}
                    />
                )}
        </VStack>
    );
});
