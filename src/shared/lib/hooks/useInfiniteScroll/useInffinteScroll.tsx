import { MutableRefObject, useLayoutEffect } from 'react';

interface useInfiniteScrollOptions {
    wrapperRef: MutableRefObject<HTMLElement>;
    triggerRef: MutableRefObject<HTMLElement>;
    callback?: () => void;
    scrollPositionForWrapper?: number;
}

export function useInfiniteScroll(props: useInfiniteScrollOptions) {
    const {
        triggerRef,
        wrapperRef,
        callback,
        scrollPositionForWrapper = 0,
    } = props;

    useLayoutEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;
        wrapperElement.scrollTop = scrollPositionForWrapper;

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
        };
    }, [callback, scrollPositionForWrapper, triggerRef, wrapperRef]);
}
