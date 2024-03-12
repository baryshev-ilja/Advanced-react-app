import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/user';
import { getArticleDetailsData } from '@/entities/article';

export const getCanEditArticle = createSelector(
    getUserAuthData,
    getArticleDetailsData,
    (user, article) => {
        if (!user || !article) {
            return false;
        }

        return user.id === article.user.id;
    },
);
