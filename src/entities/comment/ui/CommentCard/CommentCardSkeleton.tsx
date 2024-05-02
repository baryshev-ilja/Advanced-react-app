import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

import cls from './CommentCard.module.scss';

interface CommentCardSkeletonProps {
    className?: string;
}

export const CommentCardSkeleton = ({ className }: CommentCardSkeletonProps) => {
    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <VStack gap="8" max className={classNames(cls.commentCardSkeleton, {}, [className])}>
                    <HStack gap="8">
                        <SkeletonRedesigned
                            width={30}
                            height={30}
                            borderRadius="50%"
                        />
                        <SkeletonRedesigned
                            width={100}
                            height={30}
                            borderRadius="8px"
                        />
                    </HStack>
                    <SkeletonRedesigned width="100%" height={19} borderRadius="16px" />
                    <SkeletonRedesigned width="70%" height={19} borderRadius="16px" />
                </VStack>
            )}
            off={(
                <VStack gap="8" max className={classNames(cls.commentCard, {}, [className])}>
                    <HStack gap="8">
                        <SkeletonDeprecated
                            width={30}
                            height={30}
                            borderRadius="50%"
                        />
                        <SkeletonDeprecated
                            className={cls.username}
                            width={60}
                            height={10}
                        />
                    </HStack>
                    <SkeletonDeprecated width="100%" height={20} />
                </VStack>
            )}
        />
    );
};
