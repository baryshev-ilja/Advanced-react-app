import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
    UIEvent,
} from 'react';

/**
 * useDebounce - Кастомный хук для вызова коллбэка через определенный интервал,
 * с момента наступления последнего 'тригерного' события
 *
 * @param callback - Функция-коллбэк, которая будет вызываться СПУСТЯ определенный интервал
 * @param delay - Интервал в миллисекундах, СПУСТЯ который будет вызываться функция-коллбэк
 * @param eventUI - Специальный флаг, позволяющий создать особый коллбэк, который можно вызывать и передавать в него
 * объект события с типизацией для простого div-a. Это нужно например, чтобы коллбэк корректно работал при
 * бесконечном скролле
 * */
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
