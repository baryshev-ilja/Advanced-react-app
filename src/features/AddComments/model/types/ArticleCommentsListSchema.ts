import { EntityState } from '@reduxjs/toolkit';
import { CommentType } from '@/entities/comment';

export interface ArticleCommentsListSchema extends EntityState<CommentType>{
    isLoading?: boolean;
    error?: string;
}
