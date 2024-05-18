import { MutableRefObject, useLayoutEffect } from 'react';

interface useInfiniteScrollOptions {
    /** wrapperRef - Родительский элемент, внутри которого происходит механизм 'бесконечного скролла' */
    wrapperRef?: MutableRefObject<HTMLElement>;
    /** triggerRef - Наблюдаемый элемент, при появлении которого во viewport-e срабатывает коллбэк */
    triggerRef: MutableRefObject<HTMLElement>;
    /** callback - Функция-коллбэк, которая срабатывает, когда triggerRef попадает в область видимости */
    callback?: () => void;
    /** onScrollForWindow - Функция-коллбэк, которая срабатывает, если область видимости = window */
    onScrollForWindow: () => void;
    /** scrollPositionForWrapper - Позиция скролла, которая была на момент перехода на другую страницу */
    scrollPositionForWrapper?: number;
}
/**
 * useInfiniteScroll - Кастомный хук, который создает механизм 'бесконечного скролла'.
 * Основан на IntersectionObserver API
 */
export function useInfiniteScroll(props: useInfiniteScrollOptions) {
    const {
        triggerRef,
        wrapperRef,
        callback,
        onScrollForWindow,
        scrollPositionForWrapper = 0,
    } = props;

    /** Выполняет следующие функции:
     *  - установит/удалит все необходимые слушатели событий на все необходимые элементы
     *  - задействует механизм работы IntersectionObserver
     *  - если уйти со страницы и опять зайти, вернет положение скролла на значение которое было
     *    на момент ухода со страницы (благодаря scrollPositionForWrapper)
     * */
    useLayoutEffect(() => {
        const wrapperElement = wrapperRef?.current || null;
        const triggerElement = triggerRef.current;

        if (wrapperElement) {
            wrapperElement.scrollTop = scrollPositionForWrapper;
        }

        /** По умолчанию, если wrapper не найден, им становиться window */
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
