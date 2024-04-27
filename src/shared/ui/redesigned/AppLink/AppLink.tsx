import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';

import { AdditionalCls, classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

type VariantLink = 'linkUi';

interface AppLinkProps extends LinkProps{
    className?: string;
    children?: ReactNode;
    activeClassName?: string;
    variant?: VariantLink;
}

export const AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
        to,
        className,
        activeClassName = '',
        children,
        variant = '',
        ...otherProps
    } = props;

    const additionalCls: AdditionalCls = [
        className,
        cls[variant],
    ];

    return (
        <NavLink
            to={to}
            className={
                ({ isActive }) => classNames(cls.appLink, { [activeClassName]: isActive }, additionalCls)
            }
            ref={ref}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
