import { classNames } from 'shared/lib/classNames/classNames';
import {
    MutableRefObject,
    ReactNode,
    UIEvent,
    useRef,
} from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInffinteScroll';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getScrollPositionByPath } from 'widgets/Page/model/selectors/getScrollSavePosition';
import { StateSchema } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { scrollSaveActions } from 'widgets/Page/model/slice/scrollSaveSlice';
import { useThrottle } from 'shared/lib/hooks/useTrottle/useTrottle';
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

    const onScrollHandler = useThrottle((evt: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            path: pathname,
            position: evt.currentTarget.scrollTop,
        }));
    }, 500);

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
