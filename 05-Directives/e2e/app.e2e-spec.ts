import { DirectivesPage } from './app.po';

describe('directives App', function() {
  let page: DirectivesPage;

  beforeEach(() => {
    page = new DirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dir works!');
  });
});
