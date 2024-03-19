import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { CommentType } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

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
                : <Text description={t('Комментарии отсутствуют')} />}
        </VStack>
    );
});
