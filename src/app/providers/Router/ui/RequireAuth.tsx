import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData, getUserRoles, UserRole } from '@/entities/user';
import { AppRoutePaths } from '@/shared/const/routerConsts';

interface RequireAuthProps {
    children: JSX.Element,
    roles?: UserRole[];
}

export function RequireAuth(props: RequireAuthProps) {
    const { children, roles } = props;
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const usersRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = usersRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, usersRoles]);

    if (!auth) {
        return <Navigate to={AppRoutePaths.main()} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={AppRoutePaths.forbidden()} state={{ from: location }} replace />;
    }

    return children;
}
