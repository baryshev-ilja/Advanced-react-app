import { CSSProperties, useMemo } from 'react';

import UserIcon from '../../../assets/icons/user-filled.svg';
import { Skeleton } from '../../deprecated/Skeleton';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
        alt,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const mods: Mods = {};

    const errorFallbackElement = (
        <Icon
            Svg={UserIcon}
            className={classNames(cls.userFallbackIcon, mods, [className])}
            width={size}
            height={size}
        />
    );
    const loadingFallbackElement = <Skeleton className={className} width={size} height={size} borderRadius="50%" />;
    return (
        <AppImage
            className={classNames(cls.avatar, mods, [className])}
            src={src}
            fallback={loadingFallbackElement}
            errorFallback={errorFallbackElement}
            style={styles}
            alt={alt}
        />
    );
};
