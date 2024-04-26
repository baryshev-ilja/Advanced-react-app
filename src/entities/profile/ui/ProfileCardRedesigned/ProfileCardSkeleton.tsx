import { classNames } from '@/shared/lib/classNames/classNames';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ProfileCardRedesigned.module.scss';

interface ProfileCardSkeletonProps {
    className?: string;
}

export const ProfileCardSkeleton = (props: ProfileCardSkeletonProps) => {
    const { className } = props;
    return (
        <CardUI
            gap="16"
            padding="16"
            borderRadius="16"
            className={classNames(cls.profileCardRedesigned, {}, [className])}
        >
            <Skeleton className={cls.avatar} width={128} height={128} borderRadius="50%" />
            <VStack gap="8" max className={cls.inputFirstname}>
                <Skeleton width={33} height={24} borderRadius="32px" />
                <Skeleton height={40} borderRadius="8px" />
            </VStack>
            <VStack gap="8" max className={cls.inputLastname}>
                <Skeleton width={73} height={24} borderRadius="32px" />
                <Skeleton height={40} borderRadius="8px" />
            </VStack>
            <VStack gap="8" max className={cls.inputAge}>
                <Skeleton width={67} height={24} borderRadius="32px" />
                <Skeleton height={40} borderRadius="8px" />
            </VStack>
            <VStack gap="8" max className={cls.inputLinkAvatar}>
                <Skeleton width={134} height={24} borderRadius="32px" />
                <Skeleton height={40} borderRadius="8px" />
            </VStack>
            <VStack gap="8" max className={cls.inputUsername}>
                <Skeleton width={63} height={24} borderRadius="32px" />
                <Skeleton height={40} borderRadius="8px" />
            </VStack>
            <VStack gap="8" max className={cls.inputCountry}>
                <Skeleton width={49} height={24} borderRadius="32px" />
                <Skeleton height={40} borderRadius="8px" />
            </VStack>
            <VStack gap="8" max className={cls.inputCurrency}>
                <Skeleton width={63} height={24} borderRadius="32px" />
                <Skeleton height={40} borderRadius="8px" />
            </VStack>
        </CardUI>
    );
};
