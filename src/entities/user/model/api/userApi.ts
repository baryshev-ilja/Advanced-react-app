import { JsonSettings } from '../types/jsonSettings';
import { User } from '../types/userSchema';

import { rtkApi } from '@/shared/api/rtkApi';

interface SetJsonSettingsArgs {
    userId: string;
    jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<User, SetJsonSettingsArgs>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
    }),
});

export const setUserJsonSettingsMutation = userApi.endpoints.setJsonSettings.initiate;