import { HTMLAttributeAnchorTarget, memo } from 'react';

import { ArticleView, Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
}

const getArticleSkeletons = (view: ArticleView) => new Array(view === 'LIST' ? 3 : 5)
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
        <div
            className={classNames('', {}, [className, cls[view]])}
            data-testid="Article-list"
        >
            {
                articles.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
            {isLoading && getArticleSkeletons(view)}
        </div>
    );
});
