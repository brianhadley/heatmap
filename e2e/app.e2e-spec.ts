import { StravDuroPage } from './app.po';

describe('strav-duro App', () => {
  let page: StravDuroPage;

  beforeEach(() => {
    page = new StravDuroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
