import { getFeatureFlag } from './setGetFeatures';

import { FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeatureOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({ name, on, off }: ToggleFeatureOptions<T>): T {
    if (getFeatureFlag(name)) {
        return on();
    }
    return off();
}
