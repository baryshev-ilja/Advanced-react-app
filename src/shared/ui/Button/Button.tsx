import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background-inverted'
}

export enum ButtonSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;

}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const modsCls: Record<string, boolean> = {
        [cls.square]: square,
    };

    const additionalCls: string[] = [
        className,
        cls[theme],
        cls[size],
    ];

    return (
        <button
            data-testid="button-test"
            type="button"
            className={classNames(cls.button, modsCls, additionalCls)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
