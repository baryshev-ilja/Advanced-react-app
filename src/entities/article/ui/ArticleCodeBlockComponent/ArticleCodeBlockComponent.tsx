import { ArticleCodeBlock } from '../../model/types/article';

import { ToggleFeatures } from '@/shared/lib/features';
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';
import { Code as CodeRedesigned } from '@/shared/ui/redesigned/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;
    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={<CodeRedesigned text={block.code} />}
            off={<CodeDeprecated text={block.code} />}
        />
    );
};
