import { memo, ReactNode, HTMLAttributes } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    CURRENT = 'current'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    theme?: CardTheme;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.CURRENT,
        ...otherProps
    } = props;
    return (
        <div {...otherProps} className={classNames(cls.card, {}, [className, cls[theme]])}>
            {children}
        </div>
    );
});
