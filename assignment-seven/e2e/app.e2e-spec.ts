import { AssignmentSevenPage } from './app.po';

describe('assignment-seven App', () => {
  let page: AssignmentSevenPage;

  beforeEach(() => {
    page = new AssignmentSevenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
