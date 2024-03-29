import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Article, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import EyeIcon from '@/shared/assets/icons/eye_icon.svg';
import { AppRoutePaths } from '@/shared/const/routerConsts';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextSize } from '@/shared/ui/Text';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = 'GRID',
        target,
    } = props;
    const { t } = useTranslation();

    const articleTags = article.type.join(', ');
    const views = (
        <span className={cls.metaViewInner}>
            <Text className={cls.metaViewNumber} description={String(article.views)} />
            <EyeIcon className={cls.metaViewIcon} />
        </span>
    );

    if (view === 'LIST') {
        const textBlock = article.blocks.find((block) => block.type === 'TEXT') as ArticleTextBlock;

        return (
            <article
                className={classNames(cls.articleList_item, {}, [className, cls[view]])}
                data-testid="Article-list-item"
            >
                <Card>
                    <div className={cls.articleHeaderList}>
                        <div className={cls.articleHeader_listInner}>
                            <Avatar
                                className={cls.avatar}
                                size={30}
                                src={article.user.avatar}
                                alt={article.user.username}
                            />
                            <Text className={cls.username} description={article.user.username} />
                            <Text className={cls.date} description={article.createdAt} />
                        </div>
                        <Text className={cls.title} title={article.title} size={TextSize.L} />
                        <Text className={cls.metaTags} description={articleTags} />
                    </div>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton width="100%" height={250} />}
                            className={cls.img}
                            src={article.img}
                            alt={article.title}
                        />
                    </div>
                    <div className={cls.description}>
                        {textBlock && <ArticleTextBlockComponent block={textBlock} /> }
                    </div>
                    <div className={cls.footer}>
                        <AppLink
                            to={AppRoutePaths.articlesDetails(article.id)}
                            target={target}
                        >
                            <Button
                                className={cls.readArticle}
                            >
                                {t('читать статью')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </article>
        );
    }

    return (
        <article
            data-testid="Article-list-item"
        >
            <AppLink
                to={AppRoutePaths.articlesDetails(article.id)}
                target={target}
                className={classNames(cls.articleList_item, {}, [className, cls[view]])}
            >
                <Card>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton width="100%" height={250} />}
                            className={cls.img}
                            src={article.img}
                            alt={article.title}
                        />
                        <Text className={cls.date} description={article.createdAt} />
                    </div>
                    <div className={cls.titleWrapper}>
                        <div className={cls.metaInner}>
                            <Text className={cls.metaTags} description={articleTags} />
                            {views}
                        </div>
                        <Text className={cls.title} description={article.title} />
                    </div>
                </Card>
            </AppLink>
        </article>
    );
});
