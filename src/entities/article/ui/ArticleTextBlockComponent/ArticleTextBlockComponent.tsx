import { ArticleTextBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
    withoutTitle?: boolean;
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const { className, block, withoutTitle } = props;

    const titleIsVisible = block.title && !withoutTitle;

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <VStack className={classNames('', {}, [className])}>
                    {titleIsVisible && <TextRedesigned title={block.title} />}
                    {block.paragraphs.map((paragraph, index) => (
                        <TextRedesigned
                            className={cls.paragraph}
                            key={paragraph}
                            description={paragraph}
                        />
                    ))}
                </VStack>
            )}
            off={(
                <div className={classNames('', {}, [className])}>
                    {titleIsVisible && <TextDeprecated title={block.title} />}
                    {block.paragraphs.map((paragraph, index) => (
                        <TextDeprecated
                            className={cls.paragraph}
                            key={paragraph}
                            description={paragraph}
                        />
                    ))}
                </div>
            )}
        />
    );
};
