export const addComment = (text: string = '') => {
    cy.getByTestId('ArticleCommentForm.Input').type(text);
    cy.getByTestId('ArticleCommentForm.Button').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>
        }
    }
}
