import { CompleteGuidePage } from './app.po';

describe('complete-guide App', function() {
  let page: CompleteGuidePage;

  beforeEach(() => {
    page = new CompleteGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
