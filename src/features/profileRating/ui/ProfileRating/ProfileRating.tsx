import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/user';
import { useGetRateProfile, useRateProfile } from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton';
import { RatingCard } from '@/entities/rating';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();

    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetRateProfile({
        profileId,
        userId: userData?.id ?? '',
    });

    const [rateProfileMutation] = useRateProfile();

    const handleRateProfile = useCallback((starsCount: number) => {
        rateProfileMutation({
            userId: userData?.id ?? '',
            profileId,
            rate: starsCount,
        });
    }, [profileId, rateProfileMutation, userData?.id]);

    const onAcceptHandle = useCallback((starsCount: number) => {
        handleRateProfile(starsCount);
    }, [handleRateProfile]);

    if (isLoading) {
        return <Skeleton width="100%" height={140} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            title={t('Ну что, как вам этот профиль?')}
            rate={rating?.rate}
            onAccept={onAcceptHandle}
        />
    );
});

export default ProfileRating;
