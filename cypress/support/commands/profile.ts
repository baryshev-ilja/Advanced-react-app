export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditBtn').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveBtn').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        headers: {
            Authorization: 'dfgsdfg',
        },
        url: `http://localhost:8000/profile/${profileId}`,
        body: {
            id: '4',
            first: 'Виктор',
            lastname: 'Табачков',
            age: 67,
            currency: 'RUB',
            country: 'Kazakhstan',
            city: 'Minsk',
            username: 'userViktor',
            avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man.png',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}
