import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleView, Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
}

const getArticleSkeletons = (view: ArticleView) => new Array(view === 'LIST' ? 3 : 10)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton view={view} key={index} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view,
        isLoading,
        target,
    } = props;

    const renderArticle = (item: Article) => {
        return (
            <ArticleListItem
                key={item.id}
                article={item}
                view={view}
                target={target}
            />
        );
    };

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {
                articles.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
            {isLoading && getArticleSkeletons(view)}
        </div>
    );
});
