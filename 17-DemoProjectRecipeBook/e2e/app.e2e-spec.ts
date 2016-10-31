import { DemoProjectRecipeBookPage } from './app.po';

describe('demo-project-recipe-book App', function() {
  let page: DemoProjectRecipeBookPage;

  beforeEach(() => {
    page = new DemoProjectRecipeBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
