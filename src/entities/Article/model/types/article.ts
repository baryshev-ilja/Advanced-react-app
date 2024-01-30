export enum ArticleBlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    code: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    src: string;
    title?: string;
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
    img: string;
    views: 1022,
    createdAt: string;
    type: ArticleTypes[];
    blocks: ArticleBlocks[];
}
