import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad';
import { profileReducer } from 'features/EditProfileCard/model/slice/profileSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { EditableProfileCard, fetchProfileData } from 'features/EditProfileCard';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useDynamicModuleLoad({
        reducers,
        removeAfterUnmount: true,
    });

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            <ProfilePageHeader />
            <EditableProfileCard />
        </div>
    );
});

export default ProfilePage;
