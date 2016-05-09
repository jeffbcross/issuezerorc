export class IssuesRcPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('issues-rc-app h1')).getText();
  }
}
