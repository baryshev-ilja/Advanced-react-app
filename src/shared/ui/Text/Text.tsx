import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum ThemeText {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: ThemeText;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        description,
        theme = ThemeText.PRIMARY,
    } = props;

    const additionalCls: string[] = [
        className,
        cls[theme],
    ];

    return (
        <div className={classNames(cls.text, {}, additionalCls)}>
            {title && <p className={cls.title}>{title}</p>}
            {description && <p className={cls.description}>{description}</p>}
        </div>
    );
});
