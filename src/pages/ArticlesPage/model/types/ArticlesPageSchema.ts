import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { TypesOfOrders } from 'shared/types';
import { ArticleSortTypes } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view?: ArticleView;
    page: number;
    limit: number;
    hasMore: boolean;
    order: TypesOfOrders;
    sort: ArticleSortTypes;
    search: string;

    _inited: boolean;
}
