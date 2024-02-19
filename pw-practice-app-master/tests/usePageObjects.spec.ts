import { test } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';
import { faker } from '@faker-js/faker';

let pm: PageManager;
let RANDOM_FULL_NAME: string = faker.person.fullName();
let RANDOM_EMAIL: string = `${faker.person.fullName().replace(' ', '')}${faker.number.int(1000)}@gmail.com`;

test.beforeEach(async({page}) => {
  await page.goto('/');
  pm = new PageManager(page);
});

test('Navigate to form page', async({}) => {
  await pm.navigateTo().datepickerPage();
  await pm.navigateTo().formLayoutsPage();
  await pm.navigateTo().smartTablePage();
  await pm.navigateTo().toastrPage();
  await pm.navigateTo().tooltipPage();
});

test('Parametrized method', async({}) => {
  await pm.navigateTo().formLayoutsPage();
  await pm.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 1');
  await pm.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(RANDOM_FULL_NAME, RANDOM_EMAIL, true);
});

test('Date Picker Page Object', async({}) => {
  await pm.navigateTo().datepickerPage();
  await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(5);
  await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(5, 15);
});
