import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

import { getUserAuthData } from '@/entities/user';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = (props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');

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
        <HStack justify="between" max>
            <Text
                title={t('Профиль')}
            />
            {canEdit && (
                <HStack gap="16">
                    {readonly ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={btnEditHandler}
                            data-testid="EditableProfileCardHeader.EditBtn"
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                        : (
                            <>
                                <Button
                                    theme={ButtonTheme.OUTLINE_ERROR}
                                    onClick={btnCancelEditHandler}
                                    data-testid="EditableProfileCardHeader.CancelBtn"
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={btnSaveHandler}
                                    data-testid="EditableProfileCardHeader.SaveBtn"
                                >
                                    {t('Сохранить')}
                                </Button>
                            </>
                        )}
                </HStack>
            )}
        </HStack>
    );
};
