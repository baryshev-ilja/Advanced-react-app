import { memo } from 'react';

import { CommentType } from '../../model/types/comment';

import { CommentCardSkeleton } from './CommentCardSkeleton';

import { AppRoutePaths } from '@/shared/const/routerConsts';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

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
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <VStack
                    max
                    gap="8"
                    className={classNames(cls.commentCardNew, {}, [className])}
                    data-testid="ArticleDetailsComment.Content"
                >
                    <HStack gap="8" align="center" justify="start">
                        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                        <AppLink
                            className={cls.linkAvatar}
                            to={AppRoutePaths.profile(comment.user.id)}
                            variant="linkUi"
                        >
                            <TextRedesigned
                                ui={comment.user.username}
                                variant="ui"
                            />
                        </AppLink>
                    </HStack>
                    <TextRedesigned description={comment.text} variant="ui" />
                </VStack>
            )}
            off={(
                <VStack
                    max
                    className={classNames(cls.commentCard, {}, [className])}
                    data-testid="ArticleDetailsComment.Content"
                >
                    <HStack gap="8" align="center">
                        {comment.user.avatar
                            ? <AvatarDeprecated size={30} src={comment.user.avatar} />
                            : null}
                        <AppLinkDeprecated to={AppRoutePaths.profile(comment.user.id)}>
                            <TextDeprecated title={comment.user.username} />
                        </AppLinkDeprecated>
                    </HStack>
                    <TextDeprecated description={comment.text} />
                </VStack>
            )}
        />
    );
});
