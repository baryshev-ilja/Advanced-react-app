import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
} from 'react';

type AnyFunction = (...arg: any[]) => any;

export function useThrottle<Fn extends AnyFunction>(callback: ReturnType<Fn>, delay: number) {
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const throttleRef = useRef(false);

    const throttledCallback = useCallback((...arg: Parameters<Fn>) => {
        if (!throttleRef.current) {
            callback?.(...arg);
            throttleRef.current = true;

            timerRef.current = setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);

    useEffect(() => () => {
        clearTimeout(timerRef.current);
    }, []);

    return throttledCallback;
}
