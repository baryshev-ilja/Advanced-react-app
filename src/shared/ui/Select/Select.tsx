import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent,
    memo,
    useCallback,
    useMemo,
} from 'react';
import cls from './Select.module.scss';

interface optionsList {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: optionsList[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const optionsList = useMemo(() => (
        options?.map((opt) => (
            <option
                className={cls.option}
                value={opt.value}
                key={opt.value}
            >
                {opt.content}
            </option>
        ))
    ), [options]);

    const selectChangeHandler = useCallback((evt: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(evt.target.value);
        }
    }, [onChange]);

    return (
        <div className={classNames(cls.selectWrapper, mods, [className])}>
            {label
                && (
                    <span className={cls.label}>
                        {`${label}>`}
                    </span>
                )}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={selectChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
