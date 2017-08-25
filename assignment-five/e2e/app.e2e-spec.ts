import { AssignmentFivePage } from './app.po';

describe('assignment-five App', () => {
  let page: AssignmentFivePage;

  beforeEach(() => {
    page = new AssignmentFivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
