import { IssuesRcPage } from './app.po';

describe('issues-rc App', function() {
  let page: IssuesRcPage;

  beforeEach(() => {
    page = new IssuesRcPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('issues-rc works!');
  });
});
