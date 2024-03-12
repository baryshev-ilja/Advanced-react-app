import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reload = () => {
        window.location.reload();
    };

    return (
        <div className={classNames('', {}, [className])}>
            {t('Уппс... Что то пошло не так')}
            <button
                onClick={reload}
                type="button"
                className={classNames('', {}, [])}
            >
                {t('Попробуйте еще раз')}
            </button>
        </div>
    );
};
