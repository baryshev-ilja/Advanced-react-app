import { ArticleBlocks, Article } from '../../../model/types/article';

import DateIconNew from '@/shared/assets/newIcons/date-icon.svg';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleDetailsRedesigned.module.scss';

interface ArticleDetailsRedesignedProps {
    className?: string;
    data?: Article;
    renderBlock: (block: ArticleBlocks) => JSX.Element | null;
}

export const ArticleDetailsRedesigned = (props: ArticleDetailsRedesignedProps) => {
    const { className, data, renderBlock } = props;

    const dateInfo = (
        <HStack gap="4">
            <Icon Svg={DateIconNew} width={22} height={22} />
            <Text ui={data?.createdAt} variant="ui" />
        </HStack>
    );

    return (
        <VStack gap="16">
            <VStack gap="12">
                <HStack justify="between" align="center">
                    <HStack gap="8">
                        <Avatar
                            className={cls.avatar}
                            size={36}
                            src={data?.user.avatar}
                            alt={data?.user.username}
                        />
                        <Button variant="userName" tagName="span">{data?.user.username}</Button>
                    </HStack>
                    {dateInfo}
                </HStack>
                <Text
                    title={data?.title}
                    description={data?.subtitle}
                    variant="primary"
                    size="sizeL"
                    fontWeight="semiBold"
                />
            </VStack>

            <div className={cls.imageWrapper}>
                <AppImage
                    fallback={<Skeleton height={350} />}
                    className={cls.img}
                    src={data?.img}
                    alt={data?.title}
                />
            </div>

            <VStack gap="16">
                {data?.blocks.map(renderBlock)}
            </VStack>
        </VStack>
    );
};
