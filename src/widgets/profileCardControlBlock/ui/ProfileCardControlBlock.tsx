import { useSelector } from 'react-redux';

import { EditableProfileCardHeader, getProfileData } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ProfileCardControlBlock.module.scss';

interface ProfileCardControlBlockProps {
    id?: string;
}

export const ProfileCardControlBlock = ({ id }: ProfileCardControlBlockProps) => {
    const profileData = useSelector(getProfileData);
    return (
        <VStack gap="16" className={cls.controlBlock}>
            <EditableProfileCardHeader
                profileData={profileData}
                additionalFeature={(
                    <ProfileRating profileId={id!} />
                )}
            />
            <UiDesignSwitcher profileData={profileData} />
        </VStack>
    );
};
