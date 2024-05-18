import { getFeatureFlag } from './setGetFeatures';

import { FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeatureOptions<T> {
    /** name - Имя фичи для которой нужно применить on/off */
    name: keyof FeatureFlags;
    /** on - Элемент, который вернет функция, если name есть в объекте FeatureFlags */
    on: () => T;
    /** off - Элемент, который вернет функция, если name отсутствует в объекте FeatureFlags */
    off: () => T;
}

/**
 * toggleFeatures - Вспомогательная функция, которая возвращает on если в объекте FeatureFlags есть фича name.
 * Или возвращает off если в объекте FeatureFlags нет фичи name.
 */
export function toggleFeatures<T>({ name, on, off }: ToggleFeatureOptions<T>): T {
    if (getFeatureFlag(name)) {
        return on();
    }
    return off();
}
