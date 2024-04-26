import { memo } from 'react';

import { StickyContentLayout } from '../StickyContentLayout';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
    ContentPageSkeleton,
    RightbarSkeleton,
    SidebarSkeleton,
    Skeleton,
} from '@/shared/ui/redesigned/Skeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';

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
                        <Skeleton width={102} height={40} borderRadius="8px" />
                    </HStack>
                </div>
            </div>
            <div className={classNames(cls.contentWrapper, {}, [clsSkeletons.contentWrapper])}>
                <div className={cls.contentInner}>
                    <div className={cls.content}>
                        <StickyContentLayout
                            content={<ContentPageSkeleton />}
                            rightbar={<RightbarSkeleton />}
                        />
                    </div>
                    <div className={classNames(cls.sidebar, {}, [clsSkeletons.sidebarSkeleton])}>
                        <SidebarSkeleton />
                    </div>
                    <div className={cls.toolbar}>
                        <Skeleton width={40} height={40} borderRadius="50%" />
                    </div>
                </div>
            </div>
        </div>
    );
});
