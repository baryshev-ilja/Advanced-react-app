import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { ArticleListItemRedesignedSkeleton, Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ArticlesPageSkeleton.module.scss';

export const ArticlesPageSkeleton = () => {
    return (
        <StickyContentLayout
            content={<ArticleListItemRedesignedSkeleton view="LIST" />}
            rightbar={(
                <CardUI
                    className={cls.uiBlock}
                    gap="16"
                    padding="16"
                    borderRadius="16"
                >
                    <VStack gap="8">
                        <Skeleton width={50} height={24} borderRadius="16px" />
                        <Skeleton width="100%" height={40} borderRadius="8px" />
                    </VStack>
                    <VStack gap="8">
                        <Skeleton width={160} height={24} borderRadius="16px" />
                        <Skeleton width={70} height={40} borderRadius="32px" />
                    </VStack>
                    <VStack gap="8">
                        <Skeleton width={130} height={24} borderRadius="16px" />
                        <Skeleton width="100%" height={40} borderRadius="8px" />
                        <Skeleton width="100%" height={40} borderRadius="8px" />
                    </VStack>
                </CardUI>
            )}
        />
    );
};
