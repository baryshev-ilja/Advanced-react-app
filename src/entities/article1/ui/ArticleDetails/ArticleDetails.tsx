import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getArticleDetailsError } from '../../model/selectors/getArticleDetails';
import { fetchArticleDetailsById } from '../../model/services/fetchArticleDetailsById/fetchArticleDetailsById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { Article, ArticleBlocks } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import CalendarIcon from '@/shared/assets/icons/calendar_icon.svg';
import EyeIcon from '@/shared/assets/icons/eye_icon.svg';
import { DynamicReducerLoad, ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { Text, TextSize, TextAlign } from '@/shared/ui/Text';

import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string;
    isLoading?: boolean;
    data?: Article;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const renderBlock = (block: ArticleBlocks) => {
    switch (block.type) {
    case 'TEXT':
        return (
            <ArticleTextBlockComponent
                key={block.id}
                block={block}
                className={cls.block}
            />
        );
    case 'IMAGE':
        return (
            <ArticleImageBlockComponent
                key={block.id}
                block={block}
                className={cls.block}
            />
        );
    case 'CODE':
        return (
            <ArticleCodeBlockComponent
                key={block.id}
                block={block}
                className={cls.block}
            />
        );
    default:
        return null;
    }
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const {
        className,
        id,
        isLoading,
        data,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const error = useSelector(getArticleDetailsError);

    useInitialEffect(() => {
        dispatch(fetchArticleDetailsById(id));
    });

    let content;
    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    borderRadius="50%"
                />
                <Skeleton
                    className={cls.title}
                    width={700}
                    height={30}
                    borderRadius="8px"
                />
                <Skeleton
                    className={cls.meta}
                    width={400}
                    height={30}
                    borderRadius="8px"
                />
                <Skeleton className={cls.title} height={200} borderRadius="15px" />
                <Skeleton className={cls.title} height={200} borderRadius="15px" />
            </>

        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка')}
            />
        );
    } else if (data) {
        content = (
            <>
                <Avatar
                    className={cls.avatar}
                    src={data?.img}
                    size={200}
                    alt={data?.title}
                />

                <div className={cls.title}>
                    <Text
                        size={TextSize.L}
                        title={data?.title}
                        description={data?.subtitle}
                    />
                </div>

                <div className={cls.metaWrapper}>
                    <div className={cls.metaInner}>
                        <EyeIcon className={cls.icon} />
                        <span>{data?.views}</span>
                    </div>
                    <div className={cls.metaInner}>
                        <CalendarIcon className={cls.icon} />
                        <span>{data?.createdAt}</span>
                    </div>
                </div>

                <div className={cls.blocks}>
                    {data?.blocks.map(renderBlock)}
                </div>
            </>
        );
    }

    return (
        <DynamicReducerLoad reducers={reducers}>
            <VStack max className={classNames(cls.articleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicReducerLoad>
    );
});
