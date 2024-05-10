import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

import cls from './MainPage.module.scss';

export const MainPageSkeleton = () => {
    return (
        <StickyContentLayout
            content={(
                <CardUI
                    className={cls.content}
                    gap="16"
                    padding="16"
                    borderRadius="16"
                >
                    <Skeleton width={200} height={32} borderRadius="32px" />
                    <Skeleton width="100%" height={24} borderRadius="32px" />
                    <Skeleton width={236} height={24} borderRadius="32px" />
                    <Skeleton width="100%" height={450} borderRadius="8px" />
                </CardUI>
            )}
            rightbar={(
                <CardUI
                    className={cls.content}
                    gap="16"
                    padding="16"
                    borderRadius="16"
                >
                    <Skeleton width="100%" height={323} borderRadius="8px" />
                </CardUI>
            )}
        />
    );
};
