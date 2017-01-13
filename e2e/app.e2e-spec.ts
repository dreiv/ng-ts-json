import { NgTsJsonPage } from './app.po';

describe('ng-ts-json App', function() {
  let page: NgTsJsonPage;

  beforeEach(() => {
    page = new NgTsJsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
