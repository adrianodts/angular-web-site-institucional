import { AngularWebSiteInstitucionalPage } from './app.po';

describe('angular-web-site-institucional App', function() {
  let page: AngularWebSiteInstitucionalPage;

  beforeEach(() => {
    page = new AngularWebSiteInstitucionalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
