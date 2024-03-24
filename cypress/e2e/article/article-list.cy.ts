describe('Пользователь открывает страницу со списком статей', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            cy.visit('/articles');
        });
    });

    it('и список статей показывается', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('Article-list').should('exist');
        cy.getByTestId('Article-list-item').should('have.length.greaterThan', 3);
    });

    it('и список статей показывается (на стабах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('Article-list').should('exist');
        cy.getByTestId('Article-list-item').should('have.length.greaterThan', 3);
    });
});
