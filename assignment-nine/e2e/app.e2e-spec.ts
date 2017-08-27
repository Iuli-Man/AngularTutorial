import { AssignmentNinePage } from './app.po';

describe('assignment-nine App', () => {
  let page: AssignmentNinePage;

  beforeEach(() => {
    page = new AssignmentNinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
