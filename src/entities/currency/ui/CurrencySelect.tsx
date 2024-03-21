import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Currency } from '../model/types/currency';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { ListBox } from '@/shared/ui/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (currency: Currency) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = (props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
        direction = 'topRight',
    } = props;
    const { t } = useTranslation();

    const selectChangeHandler = useCallback((value: string) => {
        if (onChange) {
            onChange(value as Currency);
        }
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            currentValue={value}
            defaultValue={t('Выберите валюту')}
            onChange={selectChangeHandler}
            items={options}
            readonly={readonly}
            direction={direction}
        />
    );
};
