import { CommentType } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentType>{
    isLoading?: boolean;
    error?: string;
}
