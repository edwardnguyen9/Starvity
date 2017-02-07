import { StarvityPage } from './app.po';

describe('starvity App', function() {
  let page: StarvityPage;

  beforeEach(() => {
    page = new StarvityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
