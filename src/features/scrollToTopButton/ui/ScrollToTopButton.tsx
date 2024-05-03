import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/redesigned/Button';

export const ScrollToTopButton = memo(() => {
    const { t } = useTranslation();

    const onClickHandle = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Button
            onClick={onClickHandle}
        >
            {t('Наверх')}
        </Button>
    );
});
