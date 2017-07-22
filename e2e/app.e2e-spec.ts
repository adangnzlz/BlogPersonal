import { BlogpersonalPage } from './app.po';

describe('blogpersonal App', () => {
  let page: BlogpersonalPage;

  beforeEach(() => {
    page = new BlogpersonalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
