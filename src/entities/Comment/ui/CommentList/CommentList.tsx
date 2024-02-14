import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { CommentType } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: CommentType[];
    loading: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, loading } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={loading}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
                : <Text description={t('Комментарии отсутствуют')} />}
        </div>
    );
});
