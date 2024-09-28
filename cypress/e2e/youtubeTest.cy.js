import YouTubePage from './pages/youtubePage';

describe('YouTube Search Test', () => {
  const youtubePage = new YouTubePage();

  it('Deve buscar um vídeo e validar os resultados', () => {
    youtubePage.visit();
    youtubePage.searchVideo('Cypress Tutorial');
    youtubePage.validateResults();
    youtubePage.validateVideoTitle('Cypress');
  });
});
