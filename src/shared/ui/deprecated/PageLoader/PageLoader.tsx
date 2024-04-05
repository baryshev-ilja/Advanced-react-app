import { Loader } from '../Loader/Loader';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
);
