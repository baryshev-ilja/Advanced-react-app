import {
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
} from 'react';

type AnyFunction = (...arg: any[]) => any;

/**
 * useThrottle - Кастомный хук для вызова коллбэка в определенный интервал
 *
 * @param callback - Функция-коллбэк, которая будет вызываться через определенный интервал
 * @param delay - Интервал в миллисекундах, через который будет вызываться функция-коллбэк
 * */
export function useThrottle<Fn extends AnyFunction>(callback: ReturnType<Fn>, delay: number) {
    /** 1. Создаем ref-ы для таймера и 'блокировщика' вызова коллбэка (throttleRef) */
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const throttleRef = useRef(false);

    const throttledCallback = useCallback((...arg: Parameters<Fn>) => {
        /**
         * 2. Если 'вызов' коллбэка возможен (то-есть 'блокировщик' равен false)
         *    а) вызываем коллбэк
         *    б) фиксируем, что теперь 'вызов' коллбэка НЕ возможен (то-есть 'блокировщик' равен true)
         *    в) запускаем таймер, в котором через интервал (delay), опять разрешаем 'вызов' коллбэка
         *      (то-есть 'блокировщик' равен false)
         * */
        if (!throttleRef.current) {
            callback?.(...arg);
            throttleRef.current = true;

            timerRef.current = setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);

    /** 3. В useEffect очищаем таймер от любых побочных наслаиваний таймера на таймер */
    useEffect(() => () => {
        clearTimeout(timerRef.current);
    }, []);

    return throttledCallback;
}
