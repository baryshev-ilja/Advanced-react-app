import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/app/providers/StoreProvider';

/** useAppDispatch - Типизированный useDispatch */
export const useAppDispatch = () => useDispatch<AppDispatch>();
