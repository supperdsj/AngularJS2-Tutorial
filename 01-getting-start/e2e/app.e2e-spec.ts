import { GettingStartPage } from './app.po';

describe('getting-start App', function() {
  let page: GettingStartPage;

  beforeEach(() => {
    page = new GettingStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
