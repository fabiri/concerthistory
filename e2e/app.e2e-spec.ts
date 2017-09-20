import { ConcerthistoryPage } from './app.po';

describe('concerthistory App', () => {
  let page: ConcerthistoryPage;

  beforeEach(() => {
    page = new ConcerthistoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
