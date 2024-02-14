import { CommentCardSkeleton } from 'entities/Comment/ui/CommentCard/CommentCardSkeleton';
import cls from './CommentList.module.scss';

export const CommentListSkeletons = () => (
    <>
        <CommentCardSkeleton className={cls.comment} />
        <CommentCardSkeleton className={cls.comment} />
        <CommentCardSkeleton className={cls.comment} />
    </>
);
