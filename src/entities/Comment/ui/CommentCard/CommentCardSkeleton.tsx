import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentCard.module.scss';

interface CommentCardSkeletonProps {
    className?: string;
}

export const CommentCardSkeleton = ({ className }: CommentCardSkeletonProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <div className={cls.header}>
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
            </div>
            <Skeleton className={cls.description} width="100%" height={20} />
        </div>
    );
};
