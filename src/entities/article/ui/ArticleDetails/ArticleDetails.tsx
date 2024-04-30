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

import {
    ArticleDetailsDeprecated,
} from './ArticleDetailsDeprecated/ArticleDetailsDeprecated';
import {
    ArticleDetailsSkeletonDeprecated,
} from './ArticleDetailsDeprecated/ArticleDetailsSkeletonDeprecated';
import {
    ArticleDetailsRedesigned,
} from './ArticleDetailsRedesigned/ArticleDetailsRedesigned';
import {
    ArticleDetailsSkeletonRedesigned,
} from './ArticleDetailsRedesigned/ArticleDetailsSkeletonRedesigned';

import { DynamicReducerLoad, ReducersList } from '@/shared/lib/HOC/DynamicReducerLoad';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text';

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
                className={
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => undefined,
                        off: () => `${cls.block}`,
                    })
                }
            />
        );
    case 'IMAGE':
        return (
            <ArticleImageBlockComponent
                key={block.id}
                block={block}
                className={
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => undefined,
                        off: () => `${cls.block}`,
                    })
                }
            />
        );
    case 'CODE':
        return (
            <ArticleCodeBlockComponent
                key={block.id}
                block={block}
                className={
                    toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => undefined,
                        off: () => `${cls.block}`,
                    })
                }
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
            <ToggleFeatures
                name="isAppRedesigned"
                on={<ArticleDetailsSkeletonRedesigned />}
                off={<ArticleDetailsSkeletonDeprecated />}
            />
        );
    } else if (error) {
        content = (
            <ToggleFeatures
                name="isAppRedesigned"
                on={(
                    <TextRedesigned
                        align="center"
                        title={t('Произошла ошибка')}
                    />
                )}
                off={(
                    <TextDeprecated
                        align={TextAlign.CENTER}
                        title={t('Произошла ошибка')}
                    />
                )}
            />
        );
    } else if (data) {
        content = (
            <ToggleFeatures
                name="isAppRedesigned"
                on={<ArticleDetailsRedesigned data={data} renderBlock={renderBlock} />}
                off={<ArticleDetailsDeprecated data={data} renderBlock={renderBlock} />}
            />
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
