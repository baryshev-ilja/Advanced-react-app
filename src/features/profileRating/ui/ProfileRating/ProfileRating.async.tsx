import { lazy, Suspense } from 'react';

import { ProfileRatingProps } from './ProfileRating';

import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

const ProfileRatingLazy = lazy(() => (import('./ProfileRating')));

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
    return (
        <Suspense
            fallback={(
                <ToggleFeatures
                    name="isAppRedesigned"
                    on={(
                        <VStack gap="8">
                            <SkeletonRedesigned width="100%" height={24} borderRadius="24px" />
                            <SkeletonRedesigned width="100%" height={40} borderRadius="8px" />
                        </VStack>
                    )}
                    off={<SkeletonDeprecated width="100%" height={140} />}
                />
            )}
        >
            <ProfileRatingLazy {...props} />
        </Suspense>
    );
};
