import { memo } from 'react';

import {
    UiDesignSwitcherDeprecated,
} from './uiDesignSwitcherDeprecated/UiDesignSwitcherDeprecated';
import {
    UiDesignSwitcherRedesigned,
} from './uiDesignSwitcherRedesigned/UiDesignSwitcherRedesigned';

import { Profile } from '@/entities/profile';
import { ToggleFeatures } from '@/shared/lib/features';

interface UiDesignSwitcherProps {
    profileData?: Profile;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { profileData } = props;

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={<UiDesignSwitcherRedesigned profileData={profileData} />}
            off={<UiDesignSwitcherDeprecated />}
        />
    );
});
