import { ArticleTypes } from '../consts/constsArticle';

import { User } from '@/entities/user';

export type ArticleBlockType = 'CODE' | 'TEXT' | 'IMAGE';

export type ArticleView = 'LIST' | 'GRID';

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: 'TEXT';
    title?: string;
    paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: 'IMAGE';
    src: string;
    title?: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: 'CODE';
    code: string;
}

export type ArticleBlocks = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    user: User;
    img: string;
    views: number,
    createdAt: string;
    type: ArticleTypes[];
    blocks: ArticleBlocks[];
}
