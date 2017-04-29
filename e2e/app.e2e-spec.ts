import { BarmadeFlashPage } from './app.po';

describe('barmade-flash App', () => {
  let page: BarmadeFlashPage;

  beforeEach(() => {
    page = new BarmadeFlashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
