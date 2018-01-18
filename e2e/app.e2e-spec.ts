import { SgoCadastroCasoPage } from './app.po';

describe('sgo-cadastro-caso App', () => {
  let page: SgoCadastroCasoPage;

  beforeEach(() => {
    page = new SgoCadastroCasoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
