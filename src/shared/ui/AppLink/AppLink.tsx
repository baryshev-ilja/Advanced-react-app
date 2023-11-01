import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

export enum Color {
    'PRIMARY' = 'primary',
    'SECONDARY' = 'secondary',
}

interface AppLinkProps extends LinkProps{
    className?: string;
    color?: Color;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        color = Color.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[color]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
