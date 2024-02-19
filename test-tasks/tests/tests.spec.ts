import { test, expect } from '@playwright/test';
import { CategoriesSection } from '../page-objects/categoriesSection';
import { SubcategoryPage } from '../page-objects/subcategoryPage';
import { FiltersSection } from '../page-objects/filtersSection';
import { ItemsPage } from '../page-objects/itemsPage';

test.beforeEach(async({page, baseURL}) => {
  console.log(`Step 1: Open marketplace url. Verify it.`);
  await page.goto("/");
  expect(page.url()).toContain(baseURL);
});

test('has title', async ({ page }) => {
  let categoriesSection = new CategoriesSection(page);
  let subcategoryPage = new SubcategoryPage(page);
  let filtersSection = new FiltersSection(page);
  let itemsPage = new ItemsPage(page);
  console.log(`Step 2: Open category and subcategory if it is necessary.`);
  categoriesSection.selectCategory("Ноутбуки та комп’ютери");
  // subcategoryPage.selectSubcategory("Ноутбуки");

  // console.log(`Step 3: Navigate to the filters section, for the following marketplaces it is located on the left side. Apply 2-3 filters.`);
  // filtersSection.selectBrand("ASUS");
  // filtersSection.selectProcessor("Intel Core i7");
  // filtersSection.setPriceRange(5000, 6000);

  // console.log(`Step 4: Verify that all the items on the page are sorted correctly by the "from" and "to" price filters you entered.`);
  // itemsPage.verifyCorrectPriceFiltering(5000, 6000);
});

test('get started link', async ({ page }) => {
  
});
