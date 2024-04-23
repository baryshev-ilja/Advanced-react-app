import {
    MutableRefObject, ReactNode, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getScrollPositionByPath } from '../model/selectors/getScrollSavePosition';
import { scrollSaveActions } from '../model/slice/scrollSaveSlice';

import { StateSchema } from '@/app/providers/StoreProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInffinteScroll';
import { TestIdProps } from '@/shared/types/tests';

import cls from './Page.module.scss';

interface PageProps extends TestIdProps {
    className?: string;
    children: ReactNode;
    onEndScroll?: () => void;
}

export const Page = (props: PageProps) => {
    const {
        className,
        children,
        onEndScroll,
        'data-testid': dataTestId = '',
    } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector(
        (state: StateSchema) => getScrollPositionByPath(state, pathname),
    );

    const onScrollHandler = useDebounce((value: number) => {
        dispatch(scrollSaveActions.setScrollPosition({
            path: pathname,
            position: value,
        }));
    }, 300, true);

    const onScrollHandlerForWindow = useDebounce(() => {
        dispatch(scrollSaveActions.setScrollPosition({
            path: pathname,
            position: window.scrollY,
        }));
    }, 300, true);

    useInfiniteScroll({
        wrapperRef: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => undefined,
            off: () => wrapperRef,
        }),
        triggerRef,
        callback: onEndScroll,
        onScrollForWindow: onScrollHandlerForWindow,
        scrollPositionForWrapper: scrollPosition,
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(toggleFeatures({
                name: 'isAppRedesigned',
                on: () => `${cls.pageRedesigned}`,
                off: () => `${cls.page}`,
            }), {}, [className])}
            onScroll={onScrollHandler}
            data-testid={dataTestId}
        >
            {children}
            {onEndScroll ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </section>
    );
};
