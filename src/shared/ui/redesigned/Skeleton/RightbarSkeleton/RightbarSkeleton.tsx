import { memo } from 'react';

// eslint-disable-next-line baryshewww/layers-import

import { CardUI } from '../../CardUI';
import { VStack } from '../../Stack';
import { Skeleton } from '../Skeleton';

import cls from './RightbarSkeleton.module.scss';

export const RightbarSkeleton = memo(() => {
    return (
        <div className={cls.rightbarSkeleton}>
            <CardUI className={cls.uiBlock} padding="16" gap="16" borderRadius="16">
                <VStack gap="8">
                    <Skeleton width={50} height={24} borderRadius="16px" />
                    <Skeleton width="100%" height={40} borderRadius="8px" />
                </VStack>
                <VStack gap="8">
                    <Skeleton width={159} height={24} borderRadius="16px" />
                    <Skeleton width={70} height={40} borderRadius="32px" />
                </VStack>
                <VStack gap="8">
                    <Skeleton width={127} height={24} borderRadius="16px" />
                    <Skeleton width="100%" height={40} borderRadius="8px" />
                    <Skeleton width="100%" height={40} borderRadius="8px" />
                </VStack>
            </CardUI>
        </div>
    );
});
