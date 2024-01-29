import React from 'react';
import { AppRoutes, RoutePaths } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePaths[AppRoutes.MAIN],
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePaths[AppRoutes.ABOUT],
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePaths[AppRoutes.PROFILE],
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
    {
        path: RoutePaths[AppRoutes.ARTICLES],
        Icon: ArticlesIcon,
        text: 'Статьи',
        authOnly: true,
    },
];
