import { getValueForTestid } from '../../helpers/getValueForTestid';

describe('Тестирование роутинга', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(getValueForTestid('Main-page')).should('exist');
        });
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(getValueForTestid('Main-page')).should('exist');
        });
        it('Переход на несуществующую страницу', () => {
            cy.visit('/sdfghsfgsf');
            cy.get(getValueForTestid('no-found-page')).should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Переход на главную страницу', () => {
            cy.login('admin', '123');

            cy.visit('/profile/1');
            cy.get(getValueForTestid('Profile-page')).should('exist');
        });
        it('Переход на страницу со статьями', () => {
            cy.login('admin', '123');

            cy.visit('/articles');
            cy.get(getValueForTestid('Articles-page')).should('exist');
        });
    });
});
