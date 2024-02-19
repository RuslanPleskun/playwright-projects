import { test, expect } from '@playwright/test';
import tags from '../test-data/tags.json';

test.beforeEach(async({page}) => {
  await page.route('*/**/api/tags', async route => {
    await route.fulfill({
      body: JSON.stringify(tags)
    });
  });

  await page.goto('https://angular.realworld.how/');
});

test('Has Title', async ({ page }) => {
  await page.route('*/**/api/articles*', async route => {
    const response = await route.fetch();
    const responseBody = await response.json();
    responseBody.articles[0].title = "This is a MOCK test title";
    responseBody.articles[0].description = "This is a MOCK test description";

    await route.fulfill({
      body: JSON.stringify(responseBody)
    });
  });

  await page.getByText('Global Feed').click();
  await expect(page.locator('.navbar-brand')).toHaveText('conduit');
  await expect(page.locator('app-article-list h1').first()).toContainText('This is a MOCK test title');
  await expect(page.locator('app-article-list p').first()).toContainText('This is a MOCK test description');
});

test('Create and Delete Article', async ({page, request}) => {
  const articleResponse = await request.post('https://api.realworld.io/api/articles/', {
    data: {
      "article":{"title":"This is a test title","description":"This is a test description","body":"This is a test body","tagList":[]}
    },
  });
  expect(articleResponse.status()).toEqual(201);

  const articleResponseBody = await articleResponse.json();
  const slugId =  articleResponseBody.article.slug;

  const deleteArticleResponse = await request.delete(`https://api.realworld.io/api/articles/${slugId}`);

  expect(deleteArticleResponse.status()).toEqual(204);
});
