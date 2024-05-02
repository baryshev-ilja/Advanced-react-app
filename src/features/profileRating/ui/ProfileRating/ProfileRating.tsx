import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useGetRateProfile, useRateProfile } from '../../api/profileRatingApi';

import { RatingCard } from '@/entities/rating';
import { getUserAuthData } from '@/entities/user';
import { ToggleFeatures } from '@/shared/lib/features';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';

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
        return (
            <ToggleFeatures
                name="isAppRedesigned"
                on={(
                    <VStack gap="8">
                        <SkeletonRedesigned width="100%" height={24} borderRadius="24px" />
                        <SkeletonRedesigned width="100%" height={40} borderRadius="8px" />
                    </VStack>
                )}
                off={<SkeletonDeprecated width="100%" height={140} />}
            />
        );
    }

    const rating = data?.[0];

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={(
                <RatingCard
                    title={t('Ну что, как вам этот профиль?')}
                    rate={rating?.rate}
                    isUiTitle
                    onAccept={onAcceptHandle}
                />
            )}
            off={(
                <RatingCard
                    title={t('Ну что, как вам этот профиль?')}
                    rate={rating?.rate}
                    onAccept={onAcceptHandle}
                />
            )}
        />
    );
});

export default ProfileRating;
