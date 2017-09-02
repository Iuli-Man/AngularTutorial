import { AssigmentThreePage } from './app.po';

describe('assigment-three App', () => {
  let page: AssigmentThreePage;

  beforeEach(() => {
    page = new AssigmentThreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
