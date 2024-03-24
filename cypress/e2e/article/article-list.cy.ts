describe('Пользователь открывает страницу со списком статей', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            cy.visit('/articles');
        });
    });

    it('и список статей показывается', () => {
        cy.getByTestId('Article-list').should('exist');
        cy.getByTestId('Article-list-item').should('have.length.greaterThan', 3);
    });
});
