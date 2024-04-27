import { memo } from 'react';

// eslint-disable-next-line baryshewww/layers-import

import { CardUI } from '../../CardUI';
import { HStack, VStack } from '../../Stack';
import { Skeleton } from '../Skeleton';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './SidebarSkeleton.module.scss';

export const SidebarSkeleton = memo(() => {
    return (
        <VStack gap="32" className={classNames(cls.sidebarRedesigned)}>
            <CardUI className={cls.uiBlock} padding="16" gap="16" borderRadius="16">
                <VStack gap="8">
                    <Skeleton width={95} height={24} borderRadius="16px" />
                    <Skeleton width={70} height={40} borderRadius="32px" />
                </VStack>
                <VStack gap="8">
                    <Skeleton width={109} height={24} borderRadius="16px" />
                    <Skeleton width="100%" height={40} borderRadius="8px" />
                </VStack>
            </CardUI>
            <VStack align="start">
                <Skeleton width="100%" height={40} borderRadius="8px" />
                <HStack gap="8" className={cls.navLink}>
                    <Skeleton width={20} height={20} borderRadius="50%" />
                    <Skeleton width={60} height={18} borderRadius="16px" />
                </HStack>
                <HStack gap="8" className={cls.navLink}>
                    <Skeleton width={20} height={20} borderRadius="50%" />
                    <Skeleton width={67} height={18} borderRadius="16px" />
                </HStack>
                <HStack gap="8" className={cls.navLink}>
                    <Skeleton width={20} height={20} borderRadius="50%" />
                    <Skeleton width={53} height={18} borderRadius="16px" />
                </HStack>
            </VStack>
            <Skeleton width="100%" height={40} borderRadius="8px" />
        </VStack>

    );
});
