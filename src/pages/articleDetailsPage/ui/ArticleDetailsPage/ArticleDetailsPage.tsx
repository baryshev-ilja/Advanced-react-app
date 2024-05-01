import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ControlContentContainer } from '../ControlContentContainer/ControlContentContainer';

import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleWithComments } from '@/widgets/articleWithComments';
import { Page } from '@/widgets/page';

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
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <StickyContentLayout
                    content={(
                        <Page className={classNames('', {}, [className])}>
                            <ArticleWithComments id={id!} />
                        </Page>
                    )}
                    rightbar={<ControlContentContainer />}
                />
            )}
            off={(
                <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                    <ArticleDetailsPageHeader />
                    <ArticleWithComments id={id!} />
                </Page>
            )}
        />
    );
};

export default ArticleDetailsPage;
