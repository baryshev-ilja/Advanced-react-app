import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCanEditArticle } from '../../model/selectors/getCanEditArticle';

import { getArticleDetailsData } from '@/entities/article';
import EyeIconNew from '@/shared/assets/newIcons/views-icon.svg';
import { AppRoutePaths } from '@/shared/const/routerConsts';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ControlContentContainer.module.scss';

interface ControlContentContainerProps {
    className?: string;
}

export const ControlContentContainer = ({ className }: ControlContentContainerProps) => {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onButtonBackHandler = useCallback(() => {
        navigate(`${AppRoutePaths.articles()}`);
    }, [navigate]);

    const onButtonEditHandler = useCallback(() => {
        if (article) {
            navigate(`${AppRoutePaths.articleEdit(article.id)}`);
        }
    }, [article, navigate]);

    return (
        <CardUI
            className={classNames(cls.controlContentContainer, {}, [className])}
            padding="16"
            gap="16"
            borderRadius="16"
        >
            <Button
                variant="auth"
                onClick={onButtonBackHandler}
            >
                {t('Вернуться назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    onClick={onButtonEditHandler}
                >
                    {t('Редактировать')}
                </Button>
            )}
            {article && (
                <HStack gap="4" align="center">
                    <Icon Svg={EyeIconNew} width={22} height={22} style={{ marginBottom: '2px' }} />
                    <Text variant="ui" ui={String(article?.views)} />
                    <Text variant="ui" ui={t('просмотры', { count: article?.views })} />
                </HStack>
            )}
        </CardUI>
    );
};
