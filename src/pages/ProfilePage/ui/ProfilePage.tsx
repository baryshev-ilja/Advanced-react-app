import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ReducersList, useDynamicModuleLoad } from 'shared/lib/hooks/useDynamicModuleLoad';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    useDynamicModuleLoad({
        reducers,
        removeAfterUnmount: true,
    });

    return (
        <div className={classNames('', {}, [className])}>
            {t('Profile page')}
        </div>
    );
});

export default ProfilePage;
