import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from '@/entities/counter';
import { Page } from '@/widgets/page';

const AboutPage = memo(() => {
    const { t } = useTranslation();
    return (
        <Page data-testid="Page-about">
            {t('about')}
            {t('about')}
            {t('about')}
            <Counter />
        </Page>
    );
});

export default AboutPage;
