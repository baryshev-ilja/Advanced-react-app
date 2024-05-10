import { memo } from 'react';

import { StickyContentLayout } from '../StickyContentLayout';

import { classNames } from '@/shared/lib/classNames/classNames';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import {
    RightbarSkeleton,
    SidebarSkeleton,
    Skeleton,
} from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './MainLayout.module.scss';
import clsSkeletons from './MainLayoutSkeletons.module.scss';

export const MainLayoutSkeletons = memo(() => {
    return (
        <div className={classNames(cls.mainLayout, {}, [clsSkeletons.layout])}>
            <div className={classNames(cls.header, {}, [clsSkeletons.header])}>
                <div className={clsSkeletons.navbar}>
                    <HStack justify="between" align="center" className={clsSkeletons.navbarInner}>
                        <HStack gap="16" align="center">
                            <Skeleton width={45} height={45} borderRadius="8px" />
                            <Skeleton width={300} height={20} borderRadius="16px" />
                        </HStack>
                        <HStack gap="8" align="center">
                            <Skeleton width={40} height={40} borderRadius="8px" />
                            <Skeleton width={40} height={40} borderRadius="8px" />
                        </HStack>
                    </HStack>
                </div>
            </div>
            <div className={classNames(cls.contentWrapper, {}, [clsSkeletons.contentWrapper])}>
                <div className={cls.contentInner}>
                    <div className={cls.content}>
                        <StickyContentLayout
                            content={(
                                <CardUI style={{ paddingTop: '16px' }} gap="16" borderRadius="16">
                                    <VStack gap="12">
                                        <HStack justify="between" align="center">
                                            <HStack gap="8">
                                                <Skeleton width={36} height={36} borderRadius="50%" />
                                                <Skeleton width={128} height={36} borderRadius="8px" />
                                            </HStack>
                                            <Skeleton width={105} height={36} borderRadius="8px" />
                                        </HStack>
                                        <Skeleton width="100%" height={32} borderRadius="8px" />
                                        <Skeleton width="100%" height={32} borderRadius="8px" />
                                    </VStack>

                                    <Skeleton width="100%" height={188} borderRadius="16px" />
                                    <Skeleton width="100%" height={188} borderRadius="16px" />
                                    <Skeleton width="100%" height={188} borderRadius="16px" />
                                </CardUI>
                            )}
                            rightbar={<RightbarSkeleton />}
                        />
                    </div>
                    <div className={classNames(cls.sidebar, {}, [clsSkeletons.sidebarSkeleton])}>
                        <SidebarSkeleton />
                    </div>
                </div>
            </div>
        </div>
    );
});
