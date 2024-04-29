export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articlesDetails',
    ARTICLE_CREATE = 'articleCreate',
    ARTICLE_EDIT = 'articleEdit',
    ADMIN_PANEL = 'adminPanel',
    FORBIDDEN = 'forbidden',
    SETTINGS = 'settings',

    // last
    NOT_FOUND = 'not_found'
}

export type AppRouteFunction<Params extends any[] = any[]> = (...args: Params) => string;

export type AppRouteType =
    | 'main'
    | 'about'
    | 'profile'
    | 'articles'
    | 'articlesDetails'
    | 'articleCreate'
    | 'articleEdit'
    | 'adminPanel'
    | 'forbidden'
    | 'settings'
    | 'notFound';

export interface AppRouteParams {
    main: [],
    about: [],
    profile: [string],
    articles: [],
    articlesDetails: [string],
    articleCreate: [],
    articleEdit: [string],
    adminPanel: [],
    forbidden: [],
    settings: [],
    notFound: [],
}

export type Routes = {
    [T in AppRouteType]: AppRouteFunction<AppRouteParams[T]>
}

export const AppRoutePaths: Routes = {
    main: () => '/',
    about: () => '/about',
    profile: (id) => `/profile/${id}`,
    articles: () => '/articles',
    articlesDetails: (id) => `/articles/${id}`,
    articleEdit: (id) => `/articles/${id}/edit`,
    articleCreate: () => '/articles/new',
    adminPanel: () => '/admin',
    forbidden: () => '/forbidden',
    settings: () => '/settings',
    notFound: () => '*',
};
