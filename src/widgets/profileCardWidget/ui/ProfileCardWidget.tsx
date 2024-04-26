import { memo } from 'react';
import { useSelector } from 'react-redux';

import { EditableProfileCard, getProfileError } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ProfileCardWidgetProps {
    id?: string;
}

export const ProfileCardWidget = memo((props: ProfileCardWidgetProps) => {
    const { id } = props;
    const errorLoadingServer = useSelector(getProfileError);

    return (
        <VStack gap="16">
            <EditableProfileCard id={id} />
            {!errorLoadingServer && <ProfileRating profileId={id!} />}
        </VStack>
    );
});
