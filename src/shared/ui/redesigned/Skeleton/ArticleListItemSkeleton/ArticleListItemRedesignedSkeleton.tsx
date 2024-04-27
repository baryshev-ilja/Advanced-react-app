import { CardUI } from '../../CardUI';
import { HStack, VStack } from '../../Stack';
import { Skeleton } from '../Skeleton';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArticleListItemRedesignedSkeleton.module.scss';

interface ArticleListItemBigSkeletonProps {
    className?: string
    view?: 'GRID' | 'LIST';
}

export const ArticleListItemRedesignedSkeleton = (props: ArticleListItemBigSkeletonProps) => {
    const { className, view = 'LIST' } = props;

    if (view === 'LIST') {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <CardUI className={cls.uiBlock} padding="16" gap="16" borderRadius="16">
                    <VStack gap="12">
                        <HStack justify="between" align="center">
                            <HStack gap="8">
                                <Skeleton width={36} height={36} borderRadius="50%" />
                                <Skeleton width={128} height={36} borderRadius="8px" />
                            </HStack>
                            <Skeleton width={105} height={19} borderRadius="16px" />
                        </HStack>
                        <Skeleton width="100%" height={32} borderRadius="32px" />
                        <Skeleton width={236} height={32} borderRadius="32px" />
                    </VStack>

                    <Skeleton width={322} height={25} borderRadius="32px" />

                    <Skeleton width="100%" height={420} borderRadius="8px" />

                    <VStack gap="8">
                        <Skeleton width="100%" height={19} borderRadius="32px" />
                        <Skeleton width="100%" height={19} borderRadius="32px" />
                        <Skeleton width={281} height={19} borderRadius="32px" />
                    </VStack>

                    <HStack justify="between" align="center">
                        <Skeleton width={49} height={19} borderRadius="32px" />
                        <Skeleton width={145} height={40} borderRadius="8px" />
                    </HStack>
                </CardUI>
            </div>
        );
    }

    return (
        <CardUI
            className={classNames(cls.uiBlock, {}, [className, cls[view]])}
            borderRadius="16"
        >
            <Skeleton width="100%" height={141} />

            <VStack className={cls.contentBlock}>
                <VStack gap="8">
                    <Skeleton width={175} height={19} borderRadius="16px" />
                    <Skeleton width="100%" height={19} borderRadius="16px" />
                    <Skeleton width="100%" height={19} borderRadius="16px" />
                    <Skeleton width={120} height={19} borderRadius="16px" />
                </VStack>
                <HStack justify="between" className={cls.metaBlock}>
                    <Skeleton width={70} height={19} borderRadius="16px" />
                    <Skeleton width={70} height={19} borderRadius="16px" />
                </HStack>
            </VStack>

            <HStack justify="start" align="center" className={cls.footer}>
                <Skeleton width={105} height={19} borderRadius="16px" />
            </HStack>
        </CardUI>
    );
};
