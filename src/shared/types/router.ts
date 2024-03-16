import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/user';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
