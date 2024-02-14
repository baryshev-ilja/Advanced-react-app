import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleWithComments } from 'widgets/ArticleWithComments';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('Страница не найдена(')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleWithComments id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
