import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useGetCounterValue, getCounterValue] = buildSelector((state: StateSchema) => state.counter.value);
