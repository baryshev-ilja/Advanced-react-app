import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
} from 'react';

type AnyFunction = (...arg: any[]) => any;

export function useDebounce<Fn extends AnyFunction>(callback: ReturnType<Fn>, delay: number) {
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const debouncedCallback = useCallback((...arg: Parameters<Fn>) => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            callback?.(...arg);
        }, delay);
    }, [callback, delay]);

    useEffect(() => () => {
        clearTimeout(timerRef.current);
    }, []);

    return debouncedCallback;
}
