import { memo } from 'react';

import { CommentType } from '../../model/types/comment';

import { CommentCardSkeleton } from './CommentCardSkeleton';

import { AppRoutePaths } from '@/shared/const/routerConsts';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';

import cls from './CommentCard.module.scss';

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
        <VStack
            max
            className={classNames(cls.commentCard, {}, [className])}
            data-testid="ArticleDetailsComment.Content"
        >
            <HStack gap="8" align="center">
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <AppLink to={AppRoutePaths.profile(comment.user.id)}>
                    <Text title={comment.user.username} />
                </AppLink>
            </HStack>
            <Text description={comment.text} />
        </VStack>
    );
});
