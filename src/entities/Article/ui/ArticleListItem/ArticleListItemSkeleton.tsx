import { ArticleView } from 'entities/Article';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
    const {
        className,
        view,
    } = props;

    if (view === 'LIST') {
        return (
            <Card className={cls[view]}>
                <div className={cls.articleHeaderList}>
                    <div className={cls.articleHeader_listInner}>
                        <Skeleton
                            width={30}
                            height={30}
                            borderRadius="50%"
                            className={cls.avatar}
                        />
                        <Skeleton className={cls.username} width={150} height={15} />
                        <Skeleton className={cls.date} width={150} height={15} />
                    </div>
                    <Skeleton className={cls.title} width={300} height={24} />
                    <Skeleton className={cls.metaTagsSkeleton} width={150} height={15} />
                </div>
                <Skeleton className={cls.imageWrapper} />
                <div className={cls.description}>
                    <Skeleton className={cls.descriptionSkeleton} height={50} />
                    <Skeleton className={cls.descriptionSkeleton} height={35} />
                </div>
                <div className={cls.footer}>
                    <Skeleton className={cls.buttonSkeleton} width={100} height={35} />
                </div>
            </Card>
        );
    }

    return (
        <Card className={cls[view]}>
            <Skeleton width={250} height={250} />
            <div className={cls.titleWrapper}>
                <div className={cls.metaInner}>
                    <Skeleton width={100} height={20} />
                    <Skeleton width={50} height={20} />
                </div>
                <Skeleton className={cls.titleSkeleton} width="100%" height={20} />
            </div>
        </Card>
    );
};
