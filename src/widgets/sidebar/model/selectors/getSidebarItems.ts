import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../../model/types/sidebar';

import { getUserAuthData } from '@/entities/user';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/article-20-20.svg';
import MainIconDeprecated from '@/shared/assets/icons/main.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-20-20.svg';
import AboutIcon from '@/shared/assets/newIcons/about-icon.svg';
import ArticlesIcon from '@/shared/assets/newIcons/articles-icon.svg';
import HomeIcon from '@/shared/assets/newIcons/home-icon.svg';
import ProfileIcon from '@/shared/assets/newIcons/login-icon.svg';
import { AppRoutePaths } from '@/shared/const/routerConsts';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: AppRoutePaths.main(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => HomeIcon,
                    off: () => MainIconDeprecated,
                }),
                text: 'Главная',
            },
            {
                path: AppRoutePaths.about(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => AboutIcon,
                    off: () => AboutIconDeprecated,
                }),
                text: 'О сайте',
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: AppRoutePaths.profile(userData.id),
                    Icon: toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => ProfileIcon,
                        off: () => ProfileIconDeprecated,
                    }),
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: AppRoutePaths.articles(),
                    Icon: toggleFeatures({
                        name: 'isAppRedesigned',
                        on: () => ArticlesIcon,
                        off: () => ArticlesIconDeprecated,
                    }),
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
