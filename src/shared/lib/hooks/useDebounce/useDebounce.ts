import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    UIEvent,
} from 'react';

export function useDebounce(
    callback: (...arg: any[]) => void,
    delay: number,
    eventUI?: boolean,
) {
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    let callbackFn: (...arg: any[]) => void;

    if (eventUI) {
        callbackFn = (evt: UIEvent<HTMLDivElement>) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            const argEvt = evt.currentTarget.scrollTop;

            timerRef.current = setTimeout(() => {
                callback?.(argEvt);
            }, delay);
        };
    } else {
        callbackFn = (...arg: any[]) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
                callback?.(...arg);
            }, delay);
        };
    }

    useEffect(() => () => {
        clearTimeout(timerRef.current);
    }, []);

    return useCallback(callbackFn, [callbackFn]);
}
