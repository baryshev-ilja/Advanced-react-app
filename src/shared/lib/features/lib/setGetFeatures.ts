import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localStorage';
import { FeatureFlags } from '@/shared/types/featureFlags';

const defaultFeatures: FeatureFlags = {
    isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

let featureFags: FeatureFlags = {
    ...defaultFeatures,
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFags[flag];
}

export function getAllFeatureFlags() {
    return featureFags;
}
