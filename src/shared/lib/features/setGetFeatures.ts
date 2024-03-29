import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFags[flag];
}
