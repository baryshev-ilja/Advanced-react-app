import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { HStack, VStack } from '@/shared/ui/Stack';
import { CommentCardSkeleton } from './CommentCardSkeleton';
import { CommentType } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { RoutePaths } from '@/shared/const/routerConsts';

interface CommentCardProps {
    className?: string;
    comment: CommentType;
    isLoading: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <CommentCardSkeleton />
        );
    }

    return (
        <VStack max className={classNames(cls.commentCard, {}, [className])}>
            <HStack gap="8" align="center">
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <AppLink to={`${RoutePaths.profile}${comment.user.id}`}>
                    <Text title={comment.user.username} />
                </AppLink>
            </HStack>
            <Text description={comment.text} />
        </VStack>
    );
});
