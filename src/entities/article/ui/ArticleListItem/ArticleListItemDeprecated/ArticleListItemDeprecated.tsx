import { useTranslation } from 'react-i18next';

import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from '../ArticleListItem.module.scss';
import { ArticleListItemProps } from '../ArticleListItemProps/ArticleListItemProps';

import EyeIcon from '@/shared/assets/icons/eye_icon.svg';
import { AppRoutePaths } from '@/shared/const/routerConsts';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

export const ArticleListItemDeprecated = (props: ArticleListItemProps) => {
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
};
