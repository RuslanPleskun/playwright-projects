import { test as base } from '@playwright/test';
import { PageManager } from './page-objects/pageManager';

export type TestOptions = {
  globalsQaURL: string;
  formLayoutsPage: string;
  pageManager: PageManager;
}

export const test = base.extend<TestOptions>({
  globalsQaURL: ['', { option: true }],
  
  formLayoutsPage: [async({page, pageManager}, use) => {
    await page.goto('/');
    await pageManager.navigateTo().formLayoutsPage();
    await use('');
  }, { auto: true }],
  
  pageManager: async({page}, use) => {
    let pm = new PageManager(page);
    await use(pm);
  }
});
