import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

import {
    EditableProfileCardHeaderDeprecated,
} from './EditableProfileCardHeaderDeprecated';
import {
    EditableProfileCardHeaderRedesigned,
} from './EditableProfileCardHeaderRedesigned';

import { getUserAuthData } from '@/entities/user';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export const EditableProfileCardHeader = () => {
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);
    const userData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

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
