import { VStack } from 'shared/ui/Stack';
import { CommentCardSkeleton } from '../CommentCard/CommentCardSkeleton';

export const CommentListSkeletons = () => (
    <VStack gap="8" max>
        <CommentCardSkeleton />
        <CommentCardSkeleton />
        <CommentCardSkeleton />
    </VStack>
);
