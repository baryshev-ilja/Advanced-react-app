import { ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

import {
    EditableProfileCardHeaderDeprecated,
} from './EditableProfileCardHeaderDeprecated';
import {
    EditableProfileCardHeaderRedesigned,
} from './EditableProfileCardHeaderRedesigned';

import { Profile } from '@/entities/profile';
import { getUserAuthData } from '@/entities/user';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface EditableProfileCardHeaderProps {
    profileData?: Profile;
    additionalFeature?: ReactNode;
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
    const { profileData, additionalFeature } = props;

    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const userData = useSelector(getUserAuthData);

    const canEdit = userData?.id === profileData?.id;

    const btnEditHandler = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const btnCancelEditHandler = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const btnSaveHandler = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <EditableProfileCardHeaderRedesigned
                    canEdit={canEdit}
                    readonly={readonly}
                    btnEditHandler={btnEditHandler}
                    additionalFeatureSlot={additionalFeature}
                    btnCancelEditHandler={btnCancelEditHandler}
                    btnSaveHandler={btnSaveHandler}
                />
            )}
            off={(
                <EditableProfileCardHeaderDeprecated
                    canEdit={canEdit}
                    readonly={readonly}
                    btnEditHandler={btnEditHandler}
                    btnCancelEditHandler={btnCancelEditHandler}
                    btnSaveHandler={btnSaveHandler}
                />
            )}
        />
    );
};
