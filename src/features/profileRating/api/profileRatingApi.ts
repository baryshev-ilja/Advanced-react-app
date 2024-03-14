import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileRatingType } from '../model/types/profileRating';

interface GetProfileRateArg {
    profileId: string,
    userId: string,
}

interface ProfileRateMutationArg {
    userId: string;
    profileId: string;
    rate: number;
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRate: build.query<ProfileRatingType[], GetProfileRateArg>({
            query: ({ profileId, userId }) => ({
                url: '/profile-rating',
                params: {
                    profileId,
                    userId,
                },
            }),
        }),
        setProfileRate: build.mutation<void, ProfileRateMutationArg>({
            query: (arg) => ({
                url: '/profile-rating',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetRateProfile = profileRatingApi.useGetProfileRateQuery;
export const useRateProfile = profileRatingApi.useSetProfileRateMutation;
