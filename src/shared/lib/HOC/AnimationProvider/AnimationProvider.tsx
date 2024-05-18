import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

import type { AnimationContextPayload, GestureType, SpringType } from './types';

/** AnimationContext - Контекст с подгруженными библиотеками */
const AnimationContext = createContext<AnimationContextPayload>({});

/**
 * getAsyncAnimationModules - Асинхронная функция, которая 'лениво' подгружает библиотеки.
 *  Использует обычный promise.all, который выполнится только когда обе будут подгружены.
 */
const getAsyncAnimationModules = async () => {
    return Promise.all([
        import('@use-gesture/react'),
        import('@react-spring/web'),
    ]);
};

/** useAnimationLibs - Кастомный хук возвращающий непосредственно сам контекст с библиотеками */
export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

/**
 * AnimationProvider - Специальный провайдер, который асинхронно погружает две библиотеки для анимации,
 * только в необходимых местах, и тем самым не увеличивает вес общего bundl-a. Это сделано в целях оптимизации
 * приложения и скорости загрузки.
 */
export const AnimationProvider = ({ children }: {children: ReactNode}) => {
    /** 1. Создаем постоянные ссылки (refs) на библиотеки. Чтобы не было перерендеров */
    const GestureRef = useRef<GestureType>();
    const SpringRef = useRef<SpringType>();
    const [isLoaded, setIsLoaded] = useState(false);

    /** 2. Подгружаем 'фоном' библиотеки. И ставим отметку, что они загружены (isLoaded = true) */
    useEffect(() => {
        getAsyncAnimationModules().then(([Gesture, Spring]) => {
            GestureRef.current = Gesture;
            SpringRef.current = Spring;
            setIsLoaded(true);
        });
    }, []);

    /** 3. Сохраняем их в контексте. Делаем мемоизированный объект, чтобы не было ререндеров */
    const valueContext = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [isLoaded]);

    /** 4. Возвращаем сам провайдер, который будет давать доступ к библиотекам своим children-ам */
    return (
        <AnimationContext.Provider value={valueContext}>
            {children}
        </AnimationContext.Provider>
    );
};
