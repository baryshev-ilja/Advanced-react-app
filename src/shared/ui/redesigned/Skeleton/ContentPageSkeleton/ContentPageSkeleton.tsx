import { memo } from 'react';

// eslint-disable-next-line baryshewww/layers-import

import { CardUI } from '../../CardUI';
import { HStack, VStack } from '../../Stack';
import { Skeleton } from '../Skeleton';

import cls from './ContentPageSkeleton.module.scss';

export const ContentPageSkeleton = memo(() => {
    return (
        <div className={cls.contentPageSkeleton}>
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

                <Skeleton width="100%" height={420} borderRadius="8px" />

                <VStack gap="8">
                    <Skeleton width="100%" height={19} borderRadius="32px" />
                    <Skeleton width="100%" height={19} borderRadius="32px" />
                    <Skeleton width={281} height={19} borderRadius="32px" />
                </VStack>
            </CardUI>
        </div>
    );
});
