import React from 'react';

import {
    ProfilePageSuspense,
    ArticlesPageSuspense,
    MainPageSuspense,
} from '../ui/AppRouterSkeletons';

import { UserRole } from '@/entities/user';
import { AboutPage } from '@/pages/aboutPage';
import { AdminPanelPage } from '@/pages/adminPanelPage';
import { ArticleDetailsEditPage } from '@/pages/articleDetailsEditPage';
import { ArticleDetailsPage } from '@/pages/articleDetailsPage';
import { ArticlesPage } from '@/pages/articlesPage';
import { ForbiddenPage } from '@/pages/forbiddenPage';
import { MainPage } from '@/pages/mainPage';
import { NotFoundPage } from '@/pages/notFoundPage';
import { ProfilePage } from '@/pages/profilePage';
import { SettingsPage } from '@/pages/settingsPage';
import { AppRoutes, AppRoutePaths } from '@/shared/const/routerConsts';
import { AppRouteProps } from '@/shared/types/router';
import { PageLoader } from '@/shared/ui/deprecated/PageLoader';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: AppRoutePaths.main(),
        element: <MainPage />,
        skeleton: <MainPageSuspense />,
    },
    [AppRoutes.ABOUT]: {
        path: AppRoutePaths.about(),
        element: <AboutPage />,
        skeleton: <PageLoader />,
    },
    [AppRoutes.PROFILE]: {
        path: AppRoutePaths.profile(':id'),
        element: <ProfilePage />,
        skeleton: <ProfilePageSuspense />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: AppRoutePaths.articles(),
        element: <ArticlesPage />,
        skeleton: <ArticlesPageSuspense />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: AppRoutePaths.articlesDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: AppRoutePaths.articleEdit(':id'),
        element: <ArticleDetailsEditPage />,
        skeleton: <PageLoader />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: AppRoutePaths.articleCreate(),
        element: <ArticleDetailsEditPage />,
        skeleton: <PageLoader />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: AppRoutePaths.adminPanel(),
        element: <AdminPanelPage />,
        skeleton: <PageLoader />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        path: AppRoutePaths.forbidden(),
        element: <ForbiddenPage />,
        skeleton: <PageLoader />,
    },
    [AppRoutes.SETTINGS]: {
        path: AppRoutePaths.settings(),
        element: <SettingsPage />,
        skeleton: <PageLoader />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: AppRoutePaths.notFound(),
        element: <NotFoundPage />,
        skeleton: <PageLoader />,
    },
};
