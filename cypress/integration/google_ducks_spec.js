describe('Given the user is on the Google Home page', () => {
    context('When the user searches for ducks', () => {
        it('The search results includes the term ducks', () => {
            cy.visit('https://google.com')
            let textAreaSearch = 'input[type="text"]'
            cy.get(textAreaSearch).click().type("ducks").type("{enter}");

            cy.get('.main').should('contain', 'ducks')
            cy.get('.main').should('contain', 'Wikipedia');
            cy.get('.main').should('contain', 'Lifespan');
            cy.get('.main').should('contain', 'Egg incubation');
            cy.get('.main').should('contain', 'Family');
            cy.get('.main').should('contain', 'Anatidae');
            cy.get('.main').should('contain', 'Anseriformes');
        })
        it('The search is for Anaheim Ducks', () => {
            cy.visit('https://google.com')
            let textAreaSearch = 'input[type="text"]'
            cy.get(textAreaSearch).click().type("anaheim ducks").type("{enter}");
            cy.get('.main').should('contain', 'Stanley Cups')
        })
    })
});
