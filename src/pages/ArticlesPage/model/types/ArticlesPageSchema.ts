import { EntityState } from '@reduxjs/toolkit';
import {
    Article,
    ArticleView,
    ArticleSortTypes,
    ArticleTypes,
} from 'entities/Article';
import { TypesOfOrders } from 'shared/types';

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
    type: ArticleTypes;

    _inited: boolean;
}
