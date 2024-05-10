import { Story } from '@storybook/react';

import { setFeatureFlags } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/types/featureFlags';

export const FeatureFlagsDecorator = (features: FeatureFlags) => {
    return (StoryComponent: Story) => {
        setFeatureFlags(features);
        return (
            <StoryComponent />
        );
    };
};
