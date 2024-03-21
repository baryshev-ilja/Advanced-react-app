import { EntityState } from '@reduxjs/toolkit';

import { CommentType } from '@/entities/comment1';

export interface ArticleCommentsListSchema extends EntityState<CommentType>{
    isLoading?: boolean;
    error?: string;
}
