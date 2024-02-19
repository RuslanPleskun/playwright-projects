import { Locator, Page } from '@playwright/test';
import { HelperBase } from './helperBase';

export class FormLayoutsPage extends HelperBase {

  constructor(page: Page) {
    super(page);
  }

  private async enterEmail(locator: Locator, email: string) {
    const usingTheGridFullLocator = locator.getByRole('textbox', {name: "Email"});
    await usingTheGridFullLocator.click();
    await usingTheGridFullLocator.clear();
    await usingTheGridFullLocator.fill(email);
  }

  private async enterPassword(locator: Locator, password: string) {
    const usingTheGridFullLocator = locator.getByRole('textbox', {name: "Password"});
    await usingTheGridFullLocator.click();
    await usingTheGridFullLocator.clear();
    await usingTheGridFullLocator.fill(password);
  }

  private async enterName(locator: Locator, name: string) {
    const usingTheGridFullLocator = locator.getByRole('textbox', {name: "Jane Doe"});
    await usingTheGridFullLocator.click();
    await usingTheGridFullLocator.clear();
    await usingTheGridFullLocator.fill(name);
  }

  private async selectRadioButton(locator: Locator, optionText: string) {
    const usingTheGridFullLocator = locator.getByRole('radio', {name: optionText});
    await usingTheGridFullLocator.check({force: true});
  }

  private async selectTheCheckbox(locator: Locator, rememberMe: boolean) {
    const inlineFormFullLocator = locator.getByRole('checkbox');
    if (rememberMe) {
      await inlineFormFullLocator.check({force: true});
    }
  }

  private async clickSubmit(locator: Locator) {
    const inlineFormFullLocator = locator.getByRole('button');
    await inlineFormFullLocator.click();
  }

  /**
   * Method to fill out the Grid form with user details
   * @param email - valid email for the test user
   * @param password - valid password from the test user account
   * @param optionText - the text of the radio button that needs to be selected
   */
  async submitUsingTheGridFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string) {
    const usingTheGrid = this.page.locator('nb-card', {hasText: "Using the Grid"});

    await this.enterEmail(usingTheGrid, email);
    await this.enterPassword(usingTheGrid, password);
    await this.selectRadioButton(usingTheGrid, optionText);
    await this.clickSubmit(usingTheGrid);
  }

  /**
   * Method to fill out the Inline form with user details
   * @param name - should be first and last name of the user
   * @param email - valid email for the test user
   * @param rememberMe - true or false if user session needs to be saved
   */
  async submitInlineFormWithNameEmailAndCheckbox(name: string, email: string, rememberMe: boolean) {
    const inlineForm = this.page.locator('nb-card', {hasText: "Inline form"});

    await this.enterName(inlineForm, name);
    await this.enterEmail(inlineForm, email);
    await this.selectTheCheckbox(inlineForm, rememberMe);
    await this.clickSubmit(inlineForm);
  }
}