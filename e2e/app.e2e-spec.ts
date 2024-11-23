import { PrintManagmentTemplatePage } from './app.po';

describe('PrintManagment App', function() {
  let page: PrintManagmentTemplatePage;

  beforeEach(() => {
    page = new PrintManagmentTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
