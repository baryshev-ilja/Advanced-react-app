import {
    useCallback, useEffect, useMemo, useState,
} from 'react';

export function useVisibleScroll() {
    const [isVisible, setIsVisible] = useState(false);

    const viewportHeight = document.documentElement.clientHeight;

    const onScroll = useCallback(() => {
        if (window.pageYOffset > viewportHeight) {
            setIsVisible(true);
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

    const isVisibleValue = useMemo(() => isVisible, [isVisible]);

    return isVisible;
}
