import { ArticleCodeBlock } from '../../model/types/article';

import { Code } from '@/shared/ui/deprecated/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;
    return (
        <Code text={block.code} />
    );
};
