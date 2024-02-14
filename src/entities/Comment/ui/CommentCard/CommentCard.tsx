import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { CommentCardSkeleton } from './CommentCardSkeleton';
import { CommentType } from '../../model/types/comment';
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
        <div className={classNames(cls.commentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <AppLink to={`${RoutePaths.profile}${comment.user.id}`}>
                    <Text className={cls.username} title={comment.user.username} />
                </AppLink>
            </div>
            <Text description={comment.text} />
        </div>
    );
});
