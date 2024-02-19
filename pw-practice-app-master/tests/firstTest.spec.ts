import {test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {
  await page.goto('/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
});

test.describe('Test suite', () => {

  test('Element locator types', async({page}) => {
    // by Tag name
    page.locator('input');

    // by ID
    page.locator('#inputEmail1');

    // by Class value
    page.locator('.shape-rectangle');

    // by Attribute
    page.locator('[placeholder="Email"]');

    // by Class value(full)
    page.locator('[class="ng-tns-c140-2 ng-star-inserted"]');

    // Combine different selectors
    page.locator('input[placeholder="Email"][nbinput]');

    // by XPath(NOT RECOMMENDED)
    page.locator('//*[@id="inputEmail1"]');

    // by partial text match
    page.locator(':text("Using")');

    // by exact text match
    page.locator(':text-is("Using the Grid")');
  });

  test('User Facing Locators', async({page}) => {
    await page.getByRole('textbox', {name: "Email"}).first().click();
    await page.getByRole('button', {name: "Sign In"}).first().click();

    await page.getByLabel('Email').first().click();

    await page.getByPlaceholder('Jane Doe').click();

    await page.getByText('Using the Grid').click();

    await page.getByTitle('IoT Dashboard').click();
  });

  test('Locating Child Elements', async({page}) => {
    await page.locator('nb-card nb-radio :text-is("Option 1")').click();

    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click();

    await page.getByRole('button', {name: "Sign In"}).first().click();

    await page.locator('nb-card').nth(3).getByRole('button').click();
  });

  test('Locating Parent Elements', async({page}) => {
    // Find parent element by locator() build-in functionality
    await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"}).click();
    await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name: "Email"}).click();

    // Find parent element by filter() method
    await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Email"}).click();
    await page.locator('nb-card', {has: page.locator('.status-danger')}).getByRole('textbox', {name: "Password"}).click();

    // Find parent element using filter in filter functionality
    await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: "Sign In"})
      .getByRole('textbox', {name: "Email"}).click();

    // Find parent element using XPath funtionality
    await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', {name: "Email"}).click();
  });

  test('Reusing Locators', async({page}) => {
    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"});
    const emailField = basicForm.getByRole('textbox', {name: "Email"});

    await emailField.fill("test@test.com");
    await basicForm.getByRole('textbox', {name: "Password"}).fill("Welcome123");
    await basicForm.locator('nb-checkbox').click();
    await basicForm.getByRole('button').click();

    await expect(emailField).toHaveValue('test@test.com');
  });

  test('Extracting Values', async({page}) => {
    // Single Text Value
    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"});
    const buttonText = await basicForm.locator('button').textContent();
    expect(buttonText).toEqual('Submit');

    // All Text Values
    const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents();
    expect(allRadioButtonsLabels).toContain("Option 1");

    // Property Value of the Input Field Which Is Not a Text
    const emailField = basicForm.getByRole('textbox', {name: "Email"});
    await emailField.fill('test@test.com');
    const emailValue = await emailField.inputValue();
    expect(emailValue).toEqual('test@test.com');

    // Any Attribute Value
    const placeholderValue = await emailField.getAttribute('placeholder');
    expect(placeholderValue).toEqual('Email');
  });

  test('Assertions', async({page}) => {
    const basicFormButton = page.locator('nb-card').filter({hasText: "Basic form"}).locator('button');

    // General Assertions
    const value = 5;
    expect(value).toEqual(5);

    const text = await basicFormButton.textContent();
    expect(text).toEqual('Submit');

    // Locator Assertions
    await expect(basicFormButton).toHaveText('Submit');

    // Soft Assertions
    await expect.soft(basicFormButton).toHaveText('Submit');
    await basicFormButton.click();
  });
});
