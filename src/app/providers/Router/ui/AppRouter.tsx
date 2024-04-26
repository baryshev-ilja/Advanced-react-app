import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../config/routerConfig';

import { RequireAuth } from './RequireAuth';

import { AppRouteProps } from '@/shared/types/router';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={(
                <Skeleton
                    width={100}
                    height={30}
                    borderRadius="8px"
                />
            )}
            >
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
