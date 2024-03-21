import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../../model/types/sidebar';

import { getUserAuthData } from '@/entities/user';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg';
import MainIcon from '@/shared/assets/icons/main.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import { AppRoutePaths } from '@/shared/const/routerConsts';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: AppRoutePaths.main(),
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: AppRoutePaths.about(),
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: AppRoutePaths.profile(userData.id),
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: AppRoutePaths.articles(),
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
