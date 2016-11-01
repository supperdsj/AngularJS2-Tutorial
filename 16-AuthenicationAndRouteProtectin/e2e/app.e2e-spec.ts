import { AuthenicationAndRouteProtectionPage } from './app.po';

describe('authenication-and-route-protection App', function() {
  let page: AuthenicationAndRouteProtectionPage;

  beforeEach(() => {
    page = new AuthenicationAndRouteProtectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
