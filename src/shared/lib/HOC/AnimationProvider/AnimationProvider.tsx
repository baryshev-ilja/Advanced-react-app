import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

// TODO
// Объяснить как это все работает в комментариях
import type { AnimationContextPayload, GestureType, SpringType } from './types';

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncAnimationModules = async () => {
    return Promise.all([
        import('@use-gesture/react'),
        import('@react-spring/web'),
    ]);
};

export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

export const AnimationProvider = ({ children }: {children: ReactNode}) => {
    const GestureRef = useRef<GestureType>();
    const SpringRef = useRef<SpringType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Gesture, Spring]) => {
            GestureRef.current = Gesture;
            SpringRef.current = Spring;
            setIsLoaded(true);
        });
    }, []);

    const valueContext = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider value={valueContext}>
            {children}
        </AnimationContext.Provider>
    );
};
