import { memo } from 'react';

// eslint-disable-next-line baryshewww/layers-import

import { HStack, VStack } from '../../Stack';
import { Skeleton } from '../Skeleton';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './SidebarSkeleton.module.scss';

export const SidebarSkeleton = memo(() => {
    return (
        <VStack gap="32" className={classNames(cls.sidebarRedesigned)}>
            <Skeleton className={cls.uiBlock} width="100%" height={192} borderRadius="16px" />
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
            </VStack>
            <Skeleton width="100%" height={40} borderRadius="8px" />
        </VStack>

    );
});
