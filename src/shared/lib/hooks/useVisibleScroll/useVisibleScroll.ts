import {
    useCallback, useEffect, useState,
} from 'react';

/** useVisibleScroll - Кастомный хук для определения: нужно ли что-то показывать на экране или нет,
 * в зависимости от того сколько прокрутили страницу вниз.
 * Например: когда показывать кнопку 'Перемотать наверх'
 */
export function useVisibleScroll() {
    const [isVisible, setIsVisible] = useState(false);

    /**
     * 1. Определяем видимую часть страницы в браузере (viewport)
     */
    const viewportHeight = document.documentElement.clientHeight;

    /** Функция-коллбэк, которая будет срабатывать при прокрутке страницы вниз */
    const onScroll = useCallback(() => {
        /** 2. Если позиция скролла (например: 1234px) перевалила за viewportHeight (980px) - показывать элемент  */
        if (window.pageYOffset > viewportHeight) {
            setIsVisible(true);
        /** 3. А если наоборот стало меньше - скрыть элемент  */
        } else {
            setIsVisible(false);
        }
    }, [viewportHeight]);

    useEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [onScroll]);

    // const isVisibleValue = useMemo(() => isVisible, [isVisible]);

    return isVisible;
}
