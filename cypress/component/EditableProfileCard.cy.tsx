import { EditableProfileCard } from '@/features/editableProfileCard';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

describe('EditableProfileCard.cy.ts', () => {
    before(() => {
        const root = document.createElement('div');
        root.setAttribute('id', 'root');
        document.body.append(root);
    });

    it('Редактирование карточки профиля', () => {
        cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider options={{
                initialState: {
                    user: {
                        authData: { id: '1' },
                    },
                },
            }}
            >
                <EditableProfileCard id="1" />
            </TestProvider>,
        );
    });
});
