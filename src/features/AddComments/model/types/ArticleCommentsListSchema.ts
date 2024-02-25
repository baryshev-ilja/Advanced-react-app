import { CommentType } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleCommentsListSchema extends EntityState<CommentType>{
    isLoading?: boolean;
    error?: string;
}
