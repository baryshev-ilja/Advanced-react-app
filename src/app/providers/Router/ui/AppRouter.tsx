import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../config/routerConfig';

import { RequireAuth } from './RequireAuth';

import { AppRouteProps } from '@/shared/types/router';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={route.skeleton}>
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
