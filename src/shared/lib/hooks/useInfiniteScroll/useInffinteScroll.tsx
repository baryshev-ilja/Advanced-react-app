import { MutableRefObject, useEffect } from 'react';

interface useInfiniteScrollOptions {
    wrapperRef: MutableRefObject<HTMLElement>;
    triggerRef: MutableRefObject<HTMLElement>;
    callback?: () => void;
}

export function useInfiniteScroll(props: useInfiniteScrollOptions) {
    const { triggerRef, wrapperRef, callback } = props;

    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '1px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) callback();
            }, options);

            observer.observe(triggerRef.current);
        }

        return () => {
            if (observer) {
                // eslint-disable-next-line
                observer.unobserve(triggerRef.current);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
