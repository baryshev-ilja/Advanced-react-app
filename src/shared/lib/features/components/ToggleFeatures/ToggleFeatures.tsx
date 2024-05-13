import { ReactElement } from 'react';

import { getFeatureFlag } from '../../lib/setGetFeatures';

import { FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeaturesOptions {
    /** name - Имя фичи для которой нужно применить on/off */
    name: keyof FeatureFlags;
    /** on - Компонент, который будет отрисован, если name есть в объекте FeatureFlags */
    on: ReactElement;
    /** off - Компонент, который будет отрисован, если name отсутствует в объекте FeatureFlags */
    off: ReactElement;
}

/**
 * ToggleFeatures - Вспомогательный компонент, который возвращает on если в объекте FeatureFlags есть фича name.
 * Или возвращает off если в объекте FeatureFlags нет фичи name.
 */
export const ToggleFeatures = (props: ToggleFeaturesOptions) => {
    const { name, on, off } = props;

    if (getFeatureFlag(name)) {
        return on;
    }
    return off;
};
