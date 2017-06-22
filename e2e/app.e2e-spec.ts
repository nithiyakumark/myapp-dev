import { MyplaylistPage } from './app.po';

describe('myplaylist App', () => {
  let page: MyplaylistPage;

  beforeEach(() => {
    page = new MyplaylistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
