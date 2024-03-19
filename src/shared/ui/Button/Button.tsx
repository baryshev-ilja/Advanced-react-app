import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { AdditionalCls, classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    OUTLINE_ERROR = 'outlineError',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export type ButtonSize = 'sizeM' | 'sizeL' | 'sizeXL';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    tagName?: keyof HTMLElementTagNameMap;
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        disabled,
        size = 'sizeM',
        tagName,
        fullWidth,
        ...otherProps
    } = props;

    const modsCls: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    const additionalCls: AdditionalCls = [
        className,
        cls[theme],
        cls[size],
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
