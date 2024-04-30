import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticleDetailsRedesigned.module.scss';

export const ArticleDetailsSkeletonRedesigned = () => {
    return (
        <CardUI className={cls.uiBlock} padding="16" gap="16" borderRadius="16">
            <VStack gap="12">
                <HStack justify="between" align="center">
                    <HStack gap="8">
                        <Skeleton width={36} height={36} borderRadius="50%" />
                        <Skeleton width={128} height={36} borderRadius="8px" />
                    </HStack>
                    <Skeleton width={105} height={19} borderRadius="16px" />
                </HStack>
                <Skeleton width="100%" height={32} borderRadius="32px" />
                <Skeleton width={236} height={32} borderRadius="32px" />
            </VStack>

            <Skeleton width={322} height={25} borderRadius="32px" />

            <Skeleton width="100%" height={340} borderRadius="8px" />

            <VStack gap="8">
                <Skeleton width="100%" height={19} borderRadius="32px" />
                <Skeleton width="100%" height={19} borderRadius="32px" />
                <Skeleton width={281} height={19} borderRadius="32px" />
            </VStack>
        </CardUI>
    );
};
