import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from '@/entities/counter';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/page';

const AboutPage = memo(() => {
    const { t } = useTranslation();
    return (
        <Page data-testid="Page-about">
            {t('about')}
            {t('about')}
            {t('about')}
            <Counter />
            <Text
                title={t('About')}
                variant="primary"
                size="sizeL"
                fontWeight="semiBold"
            />
            <Text
                description={t('Пример того как может выглядеть текст')}
                size="sizeM"
            />
        </Page>
    );
});

export default AboutPage;
