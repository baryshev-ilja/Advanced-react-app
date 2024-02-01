import { AdditionalCls, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum TextSize {
    M = 'size-m',
    L = 'size-l',
}

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: ThemeText;
    align?: string;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        description,
        theme = ThemeText.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const additionalCls: AdditionalCls = [
        className,
        cls[theme],
        cls[align],
        cls[size],
    ];

    return (
        <div className={classNames(cls.text, {}, additionalCls)}>
            {title && <p className={cls.title}>{title}</p>}
            {description && <p className={cls.description}>{description}</p>}
        </div>
    );
});
