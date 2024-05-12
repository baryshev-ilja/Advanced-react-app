import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getArticleDetailsViews } from '../../../model/selectors/getArticleDetails';
import { Article, ArticleTextBlock } from '../../../model/types/article';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleListItemProps } from '../ArticleListItemProps/ArticleListItemProps';

import DateIconNew from '@/shared/assets/newIcons/date-icon.svg';
import AuthorIconNew from '@/shared/assets/newIcons/profile-icon.svg';
import EyeIconNew from '@/shared/assets/newIcons/views-icon.svg';
import { AppRoutePaths } from '@/shared/const/routerConsts';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleListItemRedesigned.module.scss';

interface ArticleListItemViewsProps {
    article: Article;
}

const ArticleListItemViews = ({ article }: ArticleListItemViewsProps) => {
    const articleViewsNew = useSelector(getArticleDetailsViews);
    const views = (articleViewsNew !== article.views) ? articleViewsNew : article.views;

    return (
        <HStack gap="4" align="center">
            <Icon Svg={EyeIconNew} width={22} height={22} style={{ marginBottom: '2px' }} />
            <Text variant="ui" ui={String(views)} />
        </HStack>
    );
};

export const ArticleListItemRedesigned = (props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = 'GRID',
        target,
    } = props;
    const { t } = useTranslation();

    // const views = (
    //     <HStack gap="4" align="center">
    //         <Icon Svg={EyeIconNew} width={22} height={22} style={{ marginBottom: '2px' }} />
    //         <Text variant="ui" ui={String(article.views)} />
    //     </HStack>
    // );
    const dateInfo = (
        <HStack gap="4">
            <Icon Svg={DateIconNew} width={22} height={22} />
            <Text ui={article.createdAt} variant="ui" />
        </HStack>
    );

    if (view === 'LIST') {
        const textBlock = article.blocks.find((block) => block.type === 'TEXT') as ArticleTextBlock;

        return (
            <article
                className={classNames(cls.articleListItemRedesigned, {}, [className, cls[view]])}
                data-testid="Article-list-item"
            >
                <CardUI padding="16" gap="16" borderRadius="16" className={cls.uiBlock}>

                    <VStack gap="12">
                        <HStack justify="between" align="center">
                            <HStack gap="8">
                                <Avatar
                                    className={cls.avatar}
                                    size={36}
                                    src={article.user.avatar}
                                    alt={article.user.username}
                                />
                                <Button variant="userName" tagName="span">{article.user.username}</Button>
                            </HStack>
                            {dateInfo}
                        </HStack>
                        <Text
                            title={article.title}
                            description={article.subtitle}
                            variant="primary"
                            size="sizeL"
                            fontWeight="semiBold"
                        />
                    </VStack>

                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton height={420} />}
                            className={cls.img}
                            src={article.img}
                            alt={article.title}
                        />
                    </div>

                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                            withoutTitle
                        />
                    )}

                    <HStack justify="between" className={cls.footer}>
                        <ArticleListItemViews article={article} />
                        <AppLink
                            to={AppRoutePaths.articlesDetails(article.id)}
                            target={target}
                            className={cls.btnToRead}
                        >
                            <Button
                                tagName="span"
                                className={cls.readArticle}
                            >
                                {t('Читать далее')}
                            </Button>
                        </AppLink>
                    </HStack>
                </CardUI>
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
                className={classNames(cls.articleListItemRedesigned, {}, [className, cls[view]])}
                variant="linkUi"
            >
                <CardUI borderRadius="16" className={cls.uiBlock}>

                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton width="100%" height={141} />}
                            className={cls.img}
                            src={article.img}
                            alt={article.title}
                        />
                        {/* <Text className={cls.date} description={article.createdAt} /> */}
                    </div>

                    <VStack justify="between" className={cls.contentBlock}>
                        <Text className={cls.textBlock} title={article.title} size="sizeM" />
                        <HStack justify="between">
                            <ArticleListItemViews article={article} />
                            {dateInfo}
                        </HStack>
                    </VStack>

                    <HStack gap="4" align="center" className={cls.footer}>
                        <Icon Svg={AuthorIconNew} width={22} height={22} />
                        <Text ui={article.user.username} variant="ui" className={cls.author} />
                    </HStack>

                </CardUI>
            </AppLink>
        </article>
    );
};
