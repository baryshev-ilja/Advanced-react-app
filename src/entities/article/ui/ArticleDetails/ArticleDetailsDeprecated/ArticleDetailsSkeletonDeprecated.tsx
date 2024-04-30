import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

import cls from './ArticleDetailsDeprecated.module.scss';

interface ArticleDetailsSkeletonDeprecatedProps {
    className?: string;
}

export const ArticleDetailsSkeletonDeprecated = ({ className }: ArticleDetailsSkeletonDeprecatedProps) => {
    return (
        <>
            <Skeleton
                className={cls.avatar}
                width={200}
                height={200}
                borderRadius="50%"
            />
            <Skeleton
                className={cls.title}
                width={700}
                height={30}
                borderRadius="8px"
            />
            <Skeleton
                className={cls.meta}
                width={400}
                height={30}
                borderRadius="8px"
            />
            <Skeleton className={cls.title} height={200} borderRadius="15px" />
            <Skeleton className={cls.title} height={200} borderRadius="15px" />
        </>
    );
};
