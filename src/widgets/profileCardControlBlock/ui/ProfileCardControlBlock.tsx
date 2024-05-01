import { useSelector } from 'react-redux';

import { EditableProfileCardHeader, getProfileData } from '@/features/editableProfileCard';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { VStack } from '@/shared/ui/redesigned/Stack';

import cls from './ProfileCardControlBlock.module.scss';

export const ProfileCardControlBlock = () => {
    const profileData = useSelector(getProfileData);
    return (
        <VStack gap="16" className={cls.controlBlock}>
            <EditableProfileCardHeader profileData={profileData} />
            <UiDesignSwitcher profileData={profileData} />
        </VStack>
    );
};
