import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReducersList, useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import CalendarIcon from 'shared/assets/icons/calendar_icon.svg';
import EyeIcon from 'shared/assets/icons/eye_icon.svg';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleBlocks, ArticleBlockType } from '../../model/types/article';
import { fetchArticleDetailsById } from '../../model/services/fetchArticleDetailsById/fetchArticleDetailsById';
import cls from './ArticleDetails.module.scss';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const renderBlock = (block: ArticleBlocks) => {
    switch (block.type) {
    case ArticleBlockType.TEXT:
        return (
            <ArticleTextBlockComponent
                key={block.id}
                block={block}
                className={cls.block}
            />
        );
    case ArticleBlockType.IMAGE:
        return (
            <ArticleImageBlockComponent
                key={block.id}
                block={block}
                className={cls.block}
            />
        );
    case ArticleBlockType.CODE:
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
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    useDynamicReducerLoad({
        reducers,
        removeAfterUnmount: true,
    });

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
                />
                <Skeleton
                    className={cls.meta}
                    width={400}
                    height={30}
                />
                <Skeleton className={cls.title} height={200} />
                <Skeleton className={cls.title} height={200} />
            </>

        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка')}
            />
        );
    } else if (article) {
        content = (
            <>
                <Avatar
                    className={cls.avatar}
                    src={article?.img}
                    size={200}
                    alt={article?.title}
                />

                <div className={cls.title}>
                    <Text
                        size={TextSize.L}
                        title={article?.title}
                        description={article?.subtitle}
                    />
                </div>

                <div className={cls.metaWrapper}>
                    <div className={cls.metaInner}>
                        <EyeIcon className={cls.icon} />
                        <span>{article?.views}</span>
                    </div>
                    <div className={cls.metaInner}>
                        <CalendarIcon className={cls.icon} />
                        <span>{article?.createdAt}</span>
                    </div>
                </div>

                <div className={cls.blocks}>
                    {article?.blocks.map(renderBlock)}
                </div>
            </>
        );
    }

    return (
        <div className={classNames(cls.articleDetails, {}, [className])}>
            {content}
        </div>
    );
});
