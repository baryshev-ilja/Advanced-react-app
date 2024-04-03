import { ReactElement } from 'react';

import { getFeatureFlag } from '../setGetFeatures';

import { FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeaturesOptions {
    name: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesOptions) => {
    const { name, on, off } = props;

    if (getFeatureFlag(name)) {
        return on;
    }
    return off;
};
