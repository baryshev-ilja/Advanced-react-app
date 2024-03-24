let currentArticleId = '';

describe('Пользователь открывает страницу со статьей', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${currentArticleId}`);
        });
    });

    afterEach(() => {
        cy.deleteArticle(currentArticleId);
    });

    it('и видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('и видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationList').should('exist');
    });

    it('и отправляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('ArticleCommentsForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('ArticleDetailsComment.Content').should('have.length', 1);
    });

    it('и ставит оценку статье', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('CardRating').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selectid=true]').should('have.length', 4);
    });

    it('и ставит оценку статье (на стабах)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('CardRating').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selectid=true]').should('have.length', 4);
    });
});
