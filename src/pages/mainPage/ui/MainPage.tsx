import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import stepOne from '@/shared/assets/Войти.png';
import stepTwo from '@/shared/assets/шаг 2.png';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
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
                        <Page className={cls.page} data-testid="Main-page">
                            <Text
                                className={cls.title}
                                title={t('Привет')}
                                align="center"
                                variant="accent"
                                size="sizeL"
                            />
                            <Text
                                className={cls.subtitle}
                                title={t('Рады приветствовать')}
                                align="center"
                                size="sizeM"
                            />

                            <div className={cls.stepNumber}>
                                1
                            </div>
                            <Text
                                className={cls.step}
                                description={t('Шаг1')}
                                align="center"
                                size="sizeM"
                            />
                            <AppImage
                                className={cls.stepOneImg}
                                src={stepOne}
                                isLoading
                            />

                            <div className={cls.stepNumber}>
                                2
                            </div>
                            <Text
                                className={cls.step}
                                description={t('Шаг2')}
                                align="center"
                                size="sizeM"
                            />
                            <AppImage
                                className={cls.stepTwoImg}
                                src={stepTwo}
                                isLoading
                            />

                            <div className={cls.stepNumber}>
                                3
                            </div>
                            <Text
                                className={cls.stepLast}
                                description={t('Шаг3')}
                                align="center"
                                size="sizeM"
                            />
                        </Page>
                    )}
                    rightbar={<div />}
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
