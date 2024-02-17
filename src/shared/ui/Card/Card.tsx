import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, HTMLAttributes } from 'react';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

export const Card = memo((props: CardProps) => {
    const { className, children, ...otherProps } = props;
    return (
        <div {...otherProps} className={classNames(cls.card, {}, [className])}>
            {children}
        </div>
    );
});
