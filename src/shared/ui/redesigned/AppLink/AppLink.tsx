import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps{
    className?: string;
    children?: ReactNode;
    activeClassName?: string;
}

export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
        to,
        className,
        activeClassName = '',
        children,
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            className={
                ({ isActive }) => classNames(cls.appLink, { [activeClassName]: isActive }, [className])
            }
            ref={ref}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
