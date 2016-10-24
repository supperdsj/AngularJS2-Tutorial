import { HttpPage } from './app.po';

describe('http App', function() {
  let page: HttpPage;

  beforeEach(() => {
    page = new HttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
