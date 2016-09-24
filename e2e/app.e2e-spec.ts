import { EntrenadorPage } from './app.po';

describe('entrenador App', function() {
  let page: EntrenadorPage;

  beforeEach(() => {
    page = new EntrenadorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
