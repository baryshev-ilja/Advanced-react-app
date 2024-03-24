let profileId = '';

describe('Пользователь открывает страницу редактирование профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`/profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('и профиль найден', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'Виктор');
    });

    it('и редактирует профиль', () => {
        const newName = 'Viktor';
        const newLastname = 'Tabachkov';
        cy.updateProfile(newName, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
