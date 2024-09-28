class YouTubePage {
    visit() {
        cy.visit('/');
    }

    searchVideo(searchTerm) {
        cy.get('input#search').type(searchTerm);
        cy.get('button#search-icon-legacy').click();
    }

    validateResults() {
        cy.get('ytd-video-renderer').should('have.length.greaterThan', 0);
    }

    validateVideoTitle() {
        cy.get('ytd-video-renderer').first().find('#video-title').invoke('text').then((text) => {
            const cleanText = text.trim();
            expect(cleanText.toLowerCase()).to.include('cypress');
        });
    }
}

export default YouTubePage;  