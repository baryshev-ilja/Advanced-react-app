import React, {
    InputHTMLAttributes, memo, ReactNode, useEffect, useRef, useState,
} from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    labelElement?: string;
    autofocus?: boolean;
    readonly?: boolean;
    placeholder?: string;
    iconInput?: ReactNode;
    'data-testid'?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type,
        id,
        labelElement,
        placeholder = '',
        iconInput,
        autofocus,
        readonly,
        'data-testid': dataTestId = '',
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
    };

    return (
        <div className={classNames(cls.inputWrapper, mods, [className])}>
            {labelElement && (
                <label
                    htmlFor={id}
                    className={cls.label}
                >
                    {labelElement}
                </label>
            )}
            <div className={cls.inputInner}>
                {iconInput && <div className={cls.iconInput}>{iconInput}</div>}
                <input
                    ref={ref}
                    className={cls.inputElement}
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    /* eslint-disable-next-line jsx-a11y/no-autofocus */
                    autoFocus={autofocus}
                    placeholder={placeholder}
                    readOnly={readonly}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    data-testid={dataTestId}
                />
            </div>
        </div>
    );
});
