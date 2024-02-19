import { test as setup, expect } from '@playwright/test';

setup('Delete Article', async({request}) => {
  const deleteArticleResponse = await request.delete(`https://api.realworld.io/api/articles/${process.env.SLUGID}`);
  expect(deleteArticleResponse.status()).toEqual(204);
});