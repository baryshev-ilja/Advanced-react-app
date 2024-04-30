import { ArticleImageBlock } from '../../model/types/article';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <VStack
                    max
                    className={classNames(cls.articleImageBlockComponent, {}, [className])}
                    gap="8"
                >
                    <img
                        src={block.src}
                        alt={block.title}
                    />
                    {block.title && (
                        <TextRedesigned
                            ui={block.title}
                            variant="ui"
                            align="center"
                            size="sizeS"
                        />
                    )}
                </VStack>
            )}
            off={(
                <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
                    <img
                        src={block.src}
                        alt={block.title}
                    />
                    {block.title && <TextDeprecated description={block.title} align={TextAlign.CENTER} />}
                </div>
            )}
        />
    );
};
