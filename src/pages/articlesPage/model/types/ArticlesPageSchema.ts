import { EntityState } from '@reduxjs/toolkit';

import {
    Article,
    ArticleView,
    ArticleSortTypes,
    ArticleTypes,
} from '@/entities/article';
import type { TypesOfOrders } from '@/shared/types/orderTypes';

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
