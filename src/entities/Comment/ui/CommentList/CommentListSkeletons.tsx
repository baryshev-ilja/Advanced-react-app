import { VStack } from 'shared/ui/Stack';
import { CommentCardSkeleton } from '../CommentCard/CommentCardSkeleton';

export const CommentListSkeletons = () => (
    <VStack gap="8">
        <CommentCardSkeleton />
        <CommentCardSkeleton />
        <CommentCardSkeleton />
    </VStack>
);
