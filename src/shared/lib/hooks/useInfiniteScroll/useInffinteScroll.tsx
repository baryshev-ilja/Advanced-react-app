import { MutableRefObject, useLayoutEffect } from 'react';

interface useInfiniteScrollOptions {
    wrapperRef?: MutableRefObject<HTMLElement>;
    triggerRef: MutableRefObject<HTMLElement>;
    callback?: () => void;
    onScrollForWindow: () => void;
    scrollPositionForWrapper?: number;
}

export function useInfiniteScroll(props: useInfiniteScrollOptions) {
    const {
        triggerRef,
        wrapperRef,
        callback,
        onScrollForWindow,
        scrollPositionForWrapper = 0,
    } = props;

    useLayoutEffect(() => {
        const wrapperElement = wrapperRef?.current || null;
        const triggerElement = triggerRef.current;

        if (wrapperElement) {
            wrapperElement.scrollTop = scrollPositionForWrapper;
        }

        if (!wrapperElement) {
            window.addEventListener('scroll', onScrollForWindow);
            window.scrollTo(0, scrollPositionForWrapper);
        }

        let observer: IntersectionObserver | null = null;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '1px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) callback();
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line
                observer.unobserve(triggerElement);
            }
            window.removeEventListener('scroll', onScrollForWindow);
        };
    }, [callback, onScrollForWindow, scrollPositionForWrapper, triggerRef, wrapperRef]);
}
