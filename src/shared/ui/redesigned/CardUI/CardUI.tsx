import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './CardUI.module.scss';

interface CardUIProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

export const CardUI = memo((props: CardUIProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;
    return (
        <div {...otherProps} className={classNames(cls.cardUi, {}, [className])}>
            {children}
        </div>
    );
});
