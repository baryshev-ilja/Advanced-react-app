import { ProfileCardSkeleton } from '../../ui/ProfileCardRedesigned/ProfileCardSkeleton';

import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ProfileCardRedesigned.module.scss';

export const ProfilePageSkeleton = () => {
    return (
        <StickyContentLayout
            content={(
                <div className={cls.profilePageSkeleton}>
                    <ProfileCardSkeleton />
                </div>
            )}
            rightbar={(
                <VStack gap="16">
                    <CardUI className={cls.cardSkeleton} padding="16" gap="16" borderRadius="16">
                        <Skeleton width="100%" height={40} borderRadius="8px" />
                        <Skeleton width="100%" height={40} borderRadius="8px" />
                        <VStack gap="8">
                            <Skeleton width="100%" height={24} borderRadius="16px" />
                            <Skeleton width="100%" height={40} borderRadius="8px" />
                        </VStack>
                    </CardUI>
                    <CardUI className={cls.cardSkeleton} padding="16" gap="16" borderRadius="16">
                        <VStack gap="8">
                            <Skeleton width={180} height={24} borderRadius="16px" />
                            <Skeleton width="100%" height={40} borderRadius="8px" />
                        </VStack>
                        <VStack gap="8">
                            <Skeleton width={150} height={24} borderRadius="16px" />
                            <Skeleton width="100%" height={40} borderRadius="8px" />
                        </VStack>
                    </CardUI>
                </VStack>
            )}
        />
    );
};
