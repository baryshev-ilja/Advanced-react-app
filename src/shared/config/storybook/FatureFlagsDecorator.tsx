import { Story } from '@storybook/react';

import { setFeatureFlags } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types/featureFlags';
/**
 * FeatureFlagsDecorator - Декоратор, создающий вокруг <StoryComponent /> окружение,
 * в котором присутствуют необходимые фичи для отображения этого <StoryComponent />
 * @param features - Фичи, которые должен 'видеть' компонент <StoryComponent />
 */
export const FeatureFlagsDecorator = (features: FeatureFlags) => {
    return (StoryComponent: Story) => {
        setFeatureFlags(features);
        return (
            <StoryComponent />
        );
    };
};
