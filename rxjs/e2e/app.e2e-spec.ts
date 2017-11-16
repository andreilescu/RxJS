import { RxjsPage } from './app.po';

describe('rxjs App', () => {
  let page: RxjsPage;

  beforeEach(() => {
    page = new RxjsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
