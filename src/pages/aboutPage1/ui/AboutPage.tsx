import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/page1';

const AboutPage = memo(() => {
    const { t } = useTranslation();
    return (
        <Page data-testid="Page-about">
            {t('about')}
        </Page>
    );
});

export default AboutPage;
