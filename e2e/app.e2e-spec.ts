import { SechandGinAngularPage } from './app.po';

describe('sechand-gin-angular App', () => {
  let page: SechandGinAngularPage;

  beforeEach(() => {
    page = new SechandGinAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
