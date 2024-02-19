import { expect } from '@playwright/test';
import { test } from '../test-options';

test.beforeEach(async({page}) => {
  await page.goto('/');
});

test.describe('Test suite', () => {
  test.describe.configure({retries: 0});

  test.beforeEach(async({page}) => {
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
  });

  test('Input Fields', async({page}) => {
    const usingTheGridEmailInput = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"});

    await usingTheGridEmailInput.fill('test@test.com');
    await usingTheGridEmailInput.clear();
    await usingTheGridEmailInput.pressSequentially('test2@test.com', {delay: 500});

    // Generic Assertions
    const inputValue = await usingTheGridEmailInput.inputValue();
    expect(inputValue).toEqual('test2@test.com');

    // Locator Assertions
    await expect(usingTheGridEmailInput).toHaveValue('test2@test.com');
  });

  test.only('Radio Buttons', async({page}) => {
    const usingTheGridForm = page.locator('nb-card', {hasText: "Using the Grid"});

    // await usingTheGridForm.getByLabel("Option 1").check({force: true});
    await usingTheGridForm.getByRole('radio', {name: "Option 2"}).check({force:true});

    const radioStatus = await usingTheGridForm.getByRole('radio', {name: "Option 1"}).isChecked();
    await expect(usingTheGridForm).toHaveScreenshot({ maxDiffPixels: 100 });

    // expect(radioStatus).toBeTruthy();
    // await usingTheGridForm.getByLabel("Option 1").check({force: true});
    // await expect(usingTheGridForm.getByRole('radio', {name: "Option 1"})).toBeChecked();

    // await usingTheGridForm.getByRole('radio', {name: "Option 2"}).check({force: true});

    // expect(await usingTheGridForm.getByRole('radio', {name: "Option 1"}).isChecked()).toBeFalsy();
    // expect(await usingTheGridForm.getByRole('radio', {name: "Option 2"}).isChecked()).toBeTruthy();
  });

});

test('Checkboxes', async({page}) => {
  await page.getByText('Modal & Overlays').click();
  await page.getByText('Toastr').click();

  await page.getByRole('checkbox', {name: "Hide on click"}).uncheck({force: true});
  await page.screenshot({path: 'screenshots/uiComponents.png'});
  await page.getByRole('checkbox', {name: "Prevent arising of duplicate toast"}).check({force: true});

  const allBoxes = page.getByRole('checkbox');
  for(const box of await allBoxes.all()) {
    await box.uncheck({force: true});
    expect(await box.isChecked()).toBeFalsy();
  }
});

test('Lists and Dropdowns', async({page}) => {
  const dropdownMenu = page.locator('ngx-header nb-select');

  await dropdownMenu.click();

  // const optionList = page.getByRole('list').locator('nb-option');
  const optionList = page.locator('nb-option-list nb-option');
  // Check if All the Items Are Present in the List
  await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"]);

  // Select Particular Item from the List
  await optionList.filter({hasText: "Cosmic"}).click();

  // Check Whether Background Color on the Page Is Correct
  const header = page.locator('nb-layout-header');
  await expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)');

  const colors = {
    "Light": "rgb(255, 255, 255)",
    "Dark": "rgb(34, 43, 69)",
    "Cosmic": "rgb(50, 50, 89)",
    "Corporate": "rgb(255, 255, 255)"
  };

  for(const color in colors) {
    await dropdownMenu.click();
    await optionList.filter({hasText: color}).click();
    await expect(header).toHaveCSS('background-color', colors[color]);
  }
});

test('Tooltips', async({page}) => {
  await page.getByText('Modal & Overlays').click();
  await page.getByText('Tooltip').click();

  const tooltipCard = page.locator('nb-card', {hasText: "Tooltip Placements"});
  await tooltipCard.getByRole('button', {name: "Top"}).hover();

  page.getByRole('tooltip'); // If HTML element has a role 'tooltip' created(role means HTML tag name)
  const tooltip = await page.locator('nb-tooltip').textContent();
  expect(tooltip).toEqual("This is a tooltip");
});

test('Dialog Box', async({page}) => {
  await page.getByText('Tables & Data').click();
  await page.getByText('Smart Table').click();

  page.on('dialog', dialog => {
    expect(dialog.message()).toEqual('Are you sure you want to delete?');
    dialog.accept();
  });

  await page.getByRole('table').locator('tr', {hasText: "mdo@gmail.com"}).locator('.nb-trash').click();
  await expect(page.locator('table tr').first()).not.toHaveText("mdo@gmail.com");
});

test('Web Tables', async({page}) => {
  await page.getByText('Tables & Data').click();
  await page.getByText('Smart Table').click();

  // 1. Get the Row by any Text in This Row
  const targetRaw = page.getByRole('row', {name: "twitter@outlook.com"});
  await targetRaw.locator('.nb-edit').click();
  await page.locator('input-editor').getByPlaceholder('Age').clear();
  await page.locator('input-editor').getByPlaceholder('Age').fill('35');
  await page.locator('.nb-checkmark').click();

  // 2. Get the Row Based on the Value In The Specific Column
  await page.locator('.ng2-smart-pagination-nav').getByText('2').click();
  const targetRowById = page.getByRole('row', {name: "11"}).filter({has: page.locator('td').nth(1).getByText('11')});
  await targetRowById.locator('.nb-edit').click();
  await page.locator('input-editor').getByPlaceholder('E-mail').clear();
  await page.locator('input-editor').getByPlaceholder('E-mail').fill('test@test.com');
  await page.locator('.nb-checkmark').click();
  await expect(targetRowById.locator('td').nth(5)).toHaveText('test@test.com');

  // 3. Test Filter the Table by a Certain Value
  const ages = ["20", "30", "40", "200"];

  for(let age of ages) {
    await page.locator("input-filter").getByPlaceholder("Age").clear();
    await page.locator("input-filter").getByPlaceholder("Age").fill(age);
    await page.waitForTimeout(500);
    const ageRows = page.locator('tbody tr');

    for(let row of await ageRows.all()) {
      const cellValue = await row.locator('td').last().textContent();

      if(age == "200") {
        expect(await page.getByRole('table').textContent()).toContain("No data found");
      } else {
        expect(cellValue).toEqual(age);
      }
    }
  }

});

test('Date Pickers', async({page}) => {
  await page.getByText('Forms').click();
  await page.getByText('Datepicker').click();

  const calendarInputField = page.getByPlaceholder('Form Picker');
  await calendarInputField.click();

  // // Hardcoded Implementation of Date Picker
  // await page.locator('[class="day-cell ng-star-inserted"]').getByText('1', {exact: true}).click();
  // await expect(calendarInputField).toHaveValue('Nov 1, 2023');

  // More Flexible Date Picker Implementation
  let date = new Date();
  date.setDate(date.getDate() + 500);
  const expectedDate = date.getDate().toString();
  const expectedMonthShort = date.toLocaleString('En-US', {month: 'short'});  // get the month in short form like 'Jul'
  const expectedMonthLong = date.toLocaleString('En-US', {month: 'long'});    // get the month in long form like 'July'
  const expectedYear = date.getFullYear();
  const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;

  let calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent();
  const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`;
  while(!calendarMonthAndYear.includes(expectedMonthAndYear)) {
    await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();
    calendarMonthAndYear = await page.locator('nb-calendar-view-mode').textContent();
  }

  await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate, {exact: true}).click();
  await expect(calendarInputField).toHaveValue(dateToAssert);
});

test('Sliders', async({page}) => {
  
  // Update attribute
  const tempGauge = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle');
  await tempGauge.evaluate(node => {
    node.setAttribute('cx', '232.630');
    node.setAttribute('cy', '232.630');
  });
  await tempGauge.click();

  // Mouse movement
  const tempBox = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger');

  // Scroll into the element to be fully visible on the screen
  await tempBox.scrollIntoViewIfNeeded();

  // After that we can access X and Y coordinates
  const box = await tempBox.boundingBox();

  // Determine the center of the element in bounding box
  const x = box.x + box.width / 2;
  const y = box.y + box.height / 2;

  // Put the mouse to the location we want to start from
  await page.mouse.move(x, y);

  // Click on the mouse
  await page.mouse.down();

  // Move the mouse horizontaly to the right
  await page.mouse.move(x + 100, y);

  // Move the mouse down
  await page.mouse.move(x + 100, y + 100);

  // Release mouse
  await page.mouse.up();

  // Evaluate the result
  await expect(tempBox).toContainText('30');
});

test('Drag and Drop with iFrames', async({page, globalsQaURL}) => {
  await page.goto(globalsQaURL);

  const frame = page.frameLocator('[rel-title="Photo Manager"] iframe');

  // Simple dragTo() method
  await frame.locator('li', {hasText: 'High Tatras 2'}).dragTo(frame.locator('#trash'));

  // More precise control
  await frame.locator('li', {hasText: 'High Tatras 4'}).hover();
  await page.mouse.down();
  await frame.locator('#trash').hover();
  await page.mouse.up();

  await expect(frame.locator('#trash h5')).toHaveText(['High Tatras 2','High Tatras 4']);
});
