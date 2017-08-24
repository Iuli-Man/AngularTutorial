import { AssignmentFourPage } from './app.po';

describe('assignment-four App', () => {
  let page: AssignmentFourPage;

  beforeEach(() => {
    page = new AssignmentFourPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
