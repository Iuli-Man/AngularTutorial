import { AssignmentSixPage } from './app.po';

describe('assignment-six App', () => {
  let page: AssignmentSixPage;

  beforeEach(() => {
    page = new AssignmentSixPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
