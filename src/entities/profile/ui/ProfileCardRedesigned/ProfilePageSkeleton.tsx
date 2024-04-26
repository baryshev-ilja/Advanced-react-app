import { ProfileCardSkeleton } from '../../ui/ProfileCardRedesigned/ProfileCardSkeleton';

import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

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
                <CardUI className={cls.cardSkeleton} padding="16" gap="16" borderRadius="16">
                    <Skeleton height={40} borderRadius="8px" />
                    <Skeleton height={40} borderRadius="8px" />
                </CardUI>
            )}
        />
    );
};
