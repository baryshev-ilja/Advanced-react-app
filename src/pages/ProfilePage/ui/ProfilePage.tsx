import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { ReducersList, useDynamicReducerLoad } from 'shared/lib/hooks/useDynamicReducerLoad';
import { profileReducer } from 'features/EditProfileCard/model/slice/profileSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { EditableProfileCard, fetchProfileData } from 'features/EditProfileCard';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useParams } from 'react-router-dom';
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
    const { id } = useParams<{id: string}>();

    useDynamicReducerLoad({
        reducers,
        removeAfterUnmount: true,
    });

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <div className={classNames('', {}, [className])}>
            <ProfilePageHeader />
            <EditableProfileCard />
        </div>
    );
});

export default ProfilePage;
