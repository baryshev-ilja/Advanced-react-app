import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { AdditionalCls, classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'primary' | 'auth' | 'themeSwitcher' | 'viewSwitcher';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    variant?: ButtonVariant;
    disabled?: boolean;
    children?: ReactNode;
    tagName?: keyof HTMLElementTagNameMap;
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'primary',
        disabled,
        tagName,
        fullWidth,
        ...otherProps
    } = props;

    const modsCls: Mods = {
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    const additionalCls: AdditionalCls = [
        className,
        cls[variant],
    ];

    const Tag = tagName;

    if (Tag) {
        return (
            <Tag
                data-testid="button-test"
                className={classNames(cls.button, modsCls, additionalCls)}
            >
                {children}
            </Tag>
        );
    }

    return (
        <button
            data-testid="button-test"
            type="button"
            className={classNames(cls.button, modsCls, additionalCls)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
