import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/user';
import { HStack } from '@/shared/ui/Stack';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';

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
