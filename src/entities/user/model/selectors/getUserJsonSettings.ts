import { JsonSettings } from '../types/jsonSettings';

import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

const defaultJsonSettings: JsonSettings = {};

export const [useUserJsonSettings, getUserJsonSettings] = buildSelector(
    (state: StateSchema) => state.user?.authData?.jsonSettings ?? defaultJsonSettings,
);
