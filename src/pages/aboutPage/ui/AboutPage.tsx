import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/page';

const AboutPage = memo(() => {
    const { t } = useTranslation();
    return (
        <Page data-testid="Page-about">
            {t('about')}
            {t('about')}
            <div>245234523459999999999999999900000000000</div>
        </Page>
    );
});

export default AboutPage;
