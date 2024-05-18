## Запуск проекта
***

- `npm install` - Устанавливаем зависимости
- `npm run start:dev` или `npm run start:dev:vite` - Запуск сервера + frontend проекта в dev режиме
<br>



## Скрипты
***

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run chromatic` - Запуск скриншотных тестов с chromatic
- `npm run storybook` - Запуск Storybook
- `npm run build-storybook` - Сборка storybook билда
- `npm run prepare` - Прекоммит хуки
- `npm run generate:slice` - Скрипт для генерации FSD слайсов
- `npm run ts:morph` - Скрипт который всем абсолютным путям добавляет алиас @ в начало пути
  
<br>


## Архитектура проекта
***
Проект написан в соответствии с методологией `Feature Sliced Design`

Ссылка на документацию - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

<br>

## Работа с переводами
***

В проекте используется библиотека `i18next` для работы с переводами.
Файлы с переводами хранятся в `public/locales`.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

<br>

## Тесты
***

В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с chromatic `npm run chromatic`
4) e2e тестирование с Cypress `npm run test:e2e`


<br>

## Линтинг
***

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin [eslint-plugin-baryshewww](https://www.npmjs.com/package/eslint-plugin-baryshewww),
который содержит 3 правила
1) `path-checker` - запрещает использовать абсолютные импорты в рамках одного модуля <br>
2) `layers-import` - проверяет корректность использования слоев с точки зрения FSD 
   (например widgets нельзя использовать в features и entities) <br>
3) `import-public-api` - разрешает импорт из других модулей только из public api. Имеет auto fix

<br>

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

<br>

## Storybook
***

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью `storybook-addon-mock`.

Файл со сторикейсами создает рядом с компонентом с расширением `.stories.tsx`

Запустить сторибук можно командой:
- `npm run storybook`

Пример:

```typescript jsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator';
import { ThemeNewDecorator } from '@/shared/config/storybook/ThemeNewDecorator';
import { ThemeNewStory } from '@/shared/const/theme';

export default {
    title: 'REDESIGNED/shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Кнопка',
    variant: 'primary',
};
Primary.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
    children: 'Кнопка',
    variant: 'primary',
    disabled: true,
};
PrimaryDisabled.decorators = [ThemeNewDecorator(ThemeNewStory.WHITE)];
```
<br>

## Конфигурация проекта
***

Для разработки проект содержит 2 конфига:
1. Webpack - `./config/build`
2. vite - `vite.config.ts`

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в `/config`
- `/config/babel` - babel
- `/config/build` - конфигурация webpack
- `/config/jest` - конфигурация тестовой среды
- `/config/storybook` - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

<br>

## CI pipeline и pre commit хуки
***

Конфигурация github actions находится в `/.github/workflows`.
В CI прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в `/.husky`

<br>

## Работа с данными
***

Взаимодействие с данными осуществляется с помощью `redux toolkit`.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Например:

```typescript jsx
const commentsAdapter = createEntityAdapter<CommentType>({
    selectId: (comment) => comment.id,
});

export const getArticleCommentsList = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleComments?.comments || commentsAdapter.getInitialState(),
);

const articleCommentsListSlice = createSlice({
    name: 'articleComments',
    initialState: commentsAdapter.getInitialState<ArticleCommentsListSchema>({
        ids: [],
        entities: {},
    }),
    reducers: {},
});
```

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Например:

```typescript jsx
const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRate: build.query<Rating[], GetArticleRateArg>({
            query: ({ articleId, userId }) => ({
                url: '/article-rating',
                params: {
                    articleId,
                    userId,
                },
            }),
        }),
        setArticleRate: build.mutation<void, ArticleRateMutationArg>({
            query: (arg) => ({
                url: '/article-rating',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});
```

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется HOC
[DynamicReducerLoad](/src/shared/lib/HOC/DynamicReducerLoad.tsx)

```typescript jsx
 <DynamicReducerLoad reducers={reducers}>
    {children}
 </DynamicReducerLoad>
```

<br>


## Сущности (entities)
***

&mdash; [article](/src/entities/article)  <br>
&mdash; [comment](/src/entities/comment) <br>
&mdash; [counter](/src/entities/counter) <br>
&mdash; [country](/src/entities/country) <br>
&mdash; [currency](/src/entities/currency) <br>
&mdash; [notification](/src/entities/notification) <br>
&mdash; [profile](/src/entities/profile) <br>
&mdash; [rating](/src/entities/rating) <br>
&mdash; [user](/src/entities/user) <br>

  <br>

## Фичи (features)
***

&mdash; [addComments](/src/features/addComments) <br>
&mdash; [articleRating](/src/features/articleRating) <br>
&mdash; [articleRecommendationList](/src/features/articleRecommendationList) <br>
&mdash; [articlesPageGreeting](/src/features/articlesPageGreeting) <br>
&mdash; [authByUsername](/src/features/authByUsername) <br>
&mdash; [avatarDropdown](/src/features/avatarDropdown) <br>
&mdash; [editableProfileCard](/src/features/editableProfileCard) <br>
&mdash; [notificationButton](/src/features/notificationButton) <br>
&mdash; [profileRating](/src/features/profileRating) <br>
&mdash; [scrollToTopButton](/src/features/scrollToTopButton) <br>
&mdash; [sortArticleList](/src/features/sortArticleList) <br>
&mdash; [toggleLanguage](/src/features/toggleLanguage) <br>
&mdash; [toggleViewArticleList](/src/features/toggleViewArticleList) <br>
&mdash; [uiDesignSwitcher](/src/features/uiDesignSwitcher) <br>
