import { AssignmentEigthPage } from './app.po';

describe('assignment-eigth App', () => {
  let page: AssignmentEigthPage;

  beforeEach(() => {
    page = new AssignmentEigthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
