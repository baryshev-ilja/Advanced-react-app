import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localStorage';
import { FeatureFlags } from '@/shared/types/featureFlags';

const defaultFeatures: FeatureFlags = {
    isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

/**
 *  featureFags - Родительский объект, который хранит все экспериментальные фичи, нужные для тестирования гипотез
 */
let featureFags: FeatureFlags = {
    ...defaultFeatures,
};

/**
 *  setFeatureFlags - Функция-сеттер, устанавливающая новую фичу в родительский объект со всеми фичами
 */
export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFags = newFeatureFlags;
    }
}

/**
 *  getFeatureFlag - Функция-геттер, возвращающая нужную фичу из родительского объекта со всеми фичами
 */
export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFags[flag];
}

/**
 *  getAllFeatureFlags - Функция-геттер, возвращающая весь родительский объект со всеми фичами
 */
export function getAllFeatureFlags() {
    return featureFags;
}
