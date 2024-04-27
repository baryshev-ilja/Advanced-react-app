import { ArticleTextBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';

import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
            {/* {block.title && <Text title={block.title} />} */}
            {block.paragraphs.map((paragraph, index) => (
                <Text
                    className={cls.paragraph}
                    key={paragraph}
                    description={paragraph}
                />
            ))}
        </div>
    );
};
