import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, Color } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/">Home</AppLink>
                <AppLink color={Color.SECONDARY} to="/about">About</AppLink>
            </div>
        </div>
    );
}
