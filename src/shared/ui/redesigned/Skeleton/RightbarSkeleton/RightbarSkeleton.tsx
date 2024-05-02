import { memo } from 'react';

// eslint-disable-next-line baryshewww/layers-import

import { Skeleton } from '../Skeleton';

import cls from './RightbarSkeleton.module.scss';

export const RightbarSkeleton = memo(() => {
    return (
        <div className={cls.rightbarSkeleton}>
            <Skeleton className={cls.uiBlock} width="100%" height={328} borderRadius="16px" />
        </div>
    );
});
