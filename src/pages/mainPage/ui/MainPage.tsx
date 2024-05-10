import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import imageRight from '@/shared/assets/боковое.jpg';
import imageMain from '@/shared/assets/главное.jpg';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { CardUI } from '@/shared/ui/redesigned/CardUI';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/page';

import cls from './MainPage.module.scss';

const MainPage = memo(() => {
    const { t } = useTranslation();
    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <StickyContentLayout
                    content={(
                        <Page data-testid="Main-page">
                            <CardUI
                                className={cls.content}
                                padding="16"
                                gap="16"
                                borderRadius="16"
                            >
                                <Text title={t('Привет')} size="sizeL" />
                                <Text description={t('Рады приветствовать')} />
                                <Text description={t('Собрали для тебя')} />
                                <div className={cls.imageWrapper}>
                                    <AppImage
                                        fallback={<Skeleton width="100%" height={450} borderRadius="8px" />}
                                        className={cls.img}
                                        src={imageMain}
                                        isLoading
                                    />
                                </div>
                            </CardUI>
                        </Page>
                    )}
                    rightbar={(
                        <CardUI
                            className={cls.content}
                            padding="16"
                            gap="16"
                            borderRadius="16"
                        >
                            <div className={cls.imageWrapper}>
                                <AppImage
                                    fallback={<Skeleton width="100%" height={323} borderRadius="8px" />}
                                    className={cls.imgRight}
                                    src={imageRight}
                                    isLoading
                                />
                            </div>
                        </CardUI>
                    )}
                />
            )}
            off={(
                <Page
                    data-testid="Main-page"
                >
                    {t('Home')}
                </Page>
            )}
        />
    );
});

export default MainPage;
