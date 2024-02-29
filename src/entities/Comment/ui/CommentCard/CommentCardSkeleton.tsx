import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './CommentCard.module.scss';

interface CommentCardSkeletonProps {
    className?: string;
}

export const CommentCardSkeleton = ({ className }: CommentCardSkeletonProps) => {
    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <VStack gap="8">
                <HStack gap="8">
                    <Skeleton
                        width={30}
                        height={30}
                        borderRadius="50%"
                    />
                    <Skeleton
                        className={cls.username}
                        width={60}
                        height={10}
                    />
                </HStack>
                <Skeleton width="100%" height={20} />
            </VStack>
        </div>
    );
};
