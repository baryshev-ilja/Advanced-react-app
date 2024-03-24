export const setRate = (rating: number = 5, feedback: string = 'feedback') => {
    cy.getByTestId(`CardRatingStar.${rating}`).click();
    cy.getByTestId('CardRatingFeedback.Input').type(feedback);
    cy.getByTestId('CardRatingFeedback.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(rating: number, feedback: string): Chainable<void>
        }
    }
}
