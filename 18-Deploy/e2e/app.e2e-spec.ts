import { DeployPage } from './app.po';

describe('deploy App', function() {
  let page: DeployPage;

  beforeEach(() => {
    page = new DeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
