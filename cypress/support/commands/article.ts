import { Article } from '../../../src/entities/article';

const defaultArticle = {
    title: 'Свежие вакансии',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 346,
    userId: '1',
    createdAt: '17.09.2023',
    type: ['Вакансии'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy.request({
        method: 'POST',
        headers: {
            Authorization: 'dfgsdfg',
        },
        url: 'http://localhost:8000/articles',
        body: article ?? defaultArticle,
    }).then((response) => response.body);
};

export const deleteArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        headers: {
            Authorization: 'dfgsdfg',
        },
        url: `http://localhost:8000/articles/${articleId}`,
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            deleteArticle(articleId: string): Chainable<void>
        }
    }
}
