import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleWithComments } from '@/widgets/articleWithComments';
import { Page } from '@/widgets/page/ui/Page';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();

    // if (!id) {
    //     return (
    //         <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
    //             {t('Страница не найдена(')}
    //         </Page>
    //     );
    // }

    return (
        <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetailsPageHeader />
            <ArticleWithComments id={id!} />
        </Page>
    );
};

export default ArticleDetailsPage;
