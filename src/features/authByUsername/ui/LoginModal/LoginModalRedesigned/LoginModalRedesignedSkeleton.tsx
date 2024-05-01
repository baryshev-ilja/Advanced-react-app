import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './LoginModalRedesignedSkeleton.module.scss';

export const LoginModalRedesignedSkeleton = () => {
    return (
        <CardUI
            className={cls.loginModal}
            padding="16"
            gap="16"
            borderRadius="16"
        >
            <div className={cls.title}>
                <Skeleton width={230} height={24} borderRadius="24px" />
            </div>
            <VStack gap="8">
                <Skeleton width={50} height={24} borderRadius="24px" />
                <Skeleton width="100%" height={40} borderRadius="8px" />
            </VStack>
            <VStack gap="8">
                <Skeleton width={60} height={24} borderRadius="24px" />
                <Skeleton width="100%" height={40} borderRadius="8px" />
            </VStack>
            <Skeleton className={cls.btn} width={77} height={40} borderRadius="8px" />
        </CardUI>
    );
};
