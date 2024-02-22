import { classNames } from 'shared/lib/classNames/classNames';
import { MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInffinteScroll';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { scrollSaveActions } from '../model/slice/scrollSaveSlice';
import { getScrollPositionByPath } from '../model/selectors/getScrollSavePosition';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onEndScroll?: () => void;
}

export const Page = (props: PageProps) => {
    const { className, children, onEndScroll } = props;
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

    useInfiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onEndScroll,
        scrollPositionForWrapper: scrollPosition,
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
            onScroll={onScrollHandler}
        >
            {children}
            {onEndScroll ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </section>
    );
};
