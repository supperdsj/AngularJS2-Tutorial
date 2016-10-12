import { ComponentPage } from './app.po';

describe('component App', function() {
  let page: ComponentPage;

  beforeEach(() => {
    page = new ComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
