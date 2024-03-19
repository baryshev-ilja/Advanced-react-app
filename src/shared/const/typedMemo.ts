import { memo } from 'react';

export const typedMemo: <T>(Component: T) => T = memo;
