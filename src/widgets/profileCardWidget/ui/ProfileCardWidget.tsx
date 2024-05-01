import { memo } from 'react';
import { useSelector } from 'react-redux';

import { EditableProfileCard, getProfileData, getProfileError } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import {
    UiDesignSwitcher,
} from '@/features/uiDesignSwitcher';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ProfileCardWidgetProps {
    id?: string;
}

export const ProfileCardWidget = memo((props: ProfileCardWidgetProps) => {
    const { id } = props;
    const errorLoadingServer = useSelector(getProfileError);
    const profileData = useSelector(getProfileData);

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <VStack gap="16">
                    <EditableProfileCard id={id} profileData={profileData} />
                    {!errorLoadingServer && <ProfileRating profileId={id!} />}
                </VStack>
            )}
            off={(
                <VStack gap="16">
                    <EditableProfileCard id={id} profileData={profileData} />
                    <UiDesignSwitcher />
                    {!errorLoadingServer && <ProfileRating profileId={id!} />}
                </VStack>
            )}
        />
    );
});
