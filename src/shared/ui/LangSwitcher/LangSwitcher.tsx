import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '../Button';

import { classNames } from '@/shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggle}
            theme={ButtonTheme.CLEAR_INVERTED}
        >
            {t(short ? 'Короткий язык' : 'language')}
        </Button>

    );
});
