import { test } from '../test-options';
import { faker } from '@faker-js/faker';

let RANDOM_FULL_NAME: string = faker.person.fullName();
let RANDOM_EMAIL: string = `${faker.person.fullName().replace(' ', '')}${faker.number.int(1000)}@gmail.com`;

test('Parametrized method', async({pageManager}) => {
  await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 1');
  await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(RANDOM_FULL_NAME, RANDOM_EMAIL, true);
});
