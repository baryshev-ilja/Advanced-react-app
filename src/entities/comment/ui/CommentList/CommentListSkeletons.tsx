import { CommentCardSkeleton } from '../CommentCard/CommentCardSkeleton';

import { VStack } from '@/shared/ui/Stack';

export const CommentListSkeletons = () => (
    <VStack gap="8" max>
        <CommentCardSkeleton />
        <CommentCardSkeleton />
        <CommentCardSkeleton />
    </VStack>
);
