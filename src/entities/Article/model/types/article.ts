import { User } from 'entities/User';

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

export enum ArticleTypes {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    VACANCIES = 'VACANCIES',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    user: User;
    img: string;
    views: 1022,
    createdAt: string;
    type: ArticleTypes[];
    blocks: ArticleBlocks[];
}
