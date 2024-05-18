import { useEffect } from 'react';

/** useInitialEffect - простой хук-обертка над обычным useEffect, для более простого переиспользования */
export const useInitialEffect = (callback: () => void) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            callback();
        }
        //    eslint-disable-next-line
        }, []);
};
