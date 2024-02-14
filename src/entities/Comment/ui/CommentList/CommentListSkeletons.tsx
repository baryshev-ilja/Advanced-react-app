import { CommentCardSkeleton } from 'entities/Comment/ui/CommentCard/CommentCardSkeleton';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';

export const CommentListSkeletons = () => (
    <div className={classNames(cls.commentList, {}, [])}>
        <CommentCardSkeleton className={cls.comment} />
        <CommentCardSkeleton className={cls.comment} />
        <CommentCardSkeleton className={cls.comment} />
    </div>
);
