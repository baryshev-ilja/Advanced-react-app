import React, { Suspense } from 'react';

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
import { AppRoutes, AppRoutePaths } from '@/shared/const/routerConsts';
import { AppRouteProps } from '@/shared/types/router';
import { PageLoader } from '@/shared/ui/deprecated/PageLoader';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: AppRoutePaths.main(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: AppRoutePaths.about(),
        element: <Suspense fallback={<PageLoader />}><AboutPage /></Suspense>,
    },
    [AppRoutes.PROFILE]: {
        path: AppRoutePaths.profile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: AppRoutePaths.articles(),
        element: <ArticlesPage />,
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
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: AppRoutePaths.articleCreate(),
        element: <ArticleDetailsEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: AppRoutePaths.adminPanel(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        path: AppRoutePaths.forbidden(),
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: AppRoutePaths.notFound(),
        element: <NotFoundPage />,
    },
};
