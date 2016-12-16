import { UnitTestsPage } from './app.po';

describe('unit-tests App', function() {
  let page: UnitTestsPage;

  beforeEach(() => {
    page = new UnitTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
