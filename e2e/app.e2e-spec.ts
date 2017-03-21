import { PropertyListingPage } from './app.po';

describe('property-listing App', () => {
  let page: PropertyListingPage;

  beforeEach(() => {
    page = new PropertyListingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
