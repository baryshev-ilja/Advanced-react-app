import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/mainPage';
import { AboutPage } from 'pages/aboutPage';
import { NotFoundPage } from 'pages/notFoundPage';
import { ProfilePage } from 'pages/profilePage';
import { ArticlesPage } from 'pages/articlesPage';
import { ArticleDetailsPage } from 'pages/articleDetailsPage';
import { ArticleDetailsEditPage } from 'pages/articleDetailsEditPage';
import { AdminPanelPage } from 'pages/adminPanelPage';
import { UserRole } from 'entities/user';
import { ForbiddenPage } from 'pages/forbiddenPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',

    // last
    NOT_FOUND = 'not_found'
}

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/',
    [AppRoutes.ARTICLE_EDIT]: '/articles/',
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePaths[AppRoutes.PROFILE]}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePaths[AppRoutes.ARTICLES],
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePaths[AppRoutes.ARTICLE_DETAILS]}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePaths[AppRoutes.ARTICLE_EDIT]}:id/edit`,
        element: <ArticleDetailsEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: `${RoutePaths[AppRoutes.ARTICLE_CREATE]}`,
        element: <ArticleDetailsEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePaths[AppRoutes.ADMIN_PANEL]}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        path: `${RoutePaths[AppRoutes.FORBIDDEN]}`,
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};
