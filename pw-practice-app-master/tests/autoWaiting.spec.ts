import {test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {
  await page.goto(process.env.TESTING_PLAYGROUND_URL);
  await page.getByText('Button Triggering AJAX Request').click();
})

test.describe('Auto Wait Test Suite', () => {
  test('Auto-Waiting', async({page}) => {
    const successButton = page.locator('.bg-success');
  
    await successButton.click();
  
    const text = await successButton.textContent();
    await successButton.waitFor({state: "attached"});
    const text1 = await successButton.allTextContents();

    expect(text).toContain('Data loaded with AJAX get request.');
    expect(text1).toContain('Data loaded with AJAX get request.');
  
    await expect(successButton).toHaveText("Data loaded with AJAX get request.", {timeout: 20000});
  });

  test('Alternative Waits', async({page}) => {
    const successButton = page.locator('.bg-success');
  
    // // Wait for Element
    // await page.waitForSelector('.bg-success');

    // // Wait for Particular Response
    // await page.waitForResponse('http://uitestingplayground.com/ajaxdata');

    // Wait for Network Calls to be Completed ('NOT RECOMMENDED')
    await page.waitForLoadState('networkidle');

    const text = await successButton.allTextContents();
    expect(text).toContain("Data loaded with AJAX get request.");
  });

  test('Timeouts', async({page}) => {
    // // Set Timeout for the particular test
    // test.setTimeout(25000);

    // // Increase Timeout for a particular test in 3 times
    // test.slow();

    const successButton = page.locator('.bg-success');
    // Increase Action Timeout for a Particular Action 
    await successButton.click({timeout: 7000}); 
  });
});