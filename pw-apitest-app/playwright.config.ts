import { defineConfig, devices } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
  retries: 1,
  reporter: 'html',
  use: {
    baseURL: 'https://angular.realworld.how/',

    trace: 'on-first-retry',
    extraHTTPHeaders: {
      'Authorization': `Token ${process.env.ACCESS_TOKEN}`
    }
  },

  globalSetup: require.resolve('./global-setup.ts'),
  globalTeardown: require.resolve('./global-teardown.ts'),

  projects: [
    {
      name: 'setup',
      testMatch: 'auth.setup.ts'
    },

    {
      name: 'articleSetup',
      testMatch: 'newArticle.setup.ts',
      dependencies: ['setup'],
      teardown: 'articleCleanUp'
    },

    {
      name: 'articleCleanUp',
      testMatch: 'articleCleanUp.setup.ts',
    },

    {
      name: 'regression',
      testIgnore: 'likesCounter.spec.ts', 
      use: { ...devices['Desktop Chrome'], storageState: '.auth/user.json' },
      dependencies: ['setup']
    },

    {
      name: 'likeCounter',
      testMatch: 'likesCounter.spec.ts',
      use: { ...devices['Desktop Chrome'], storageState: '.auth/user.json' },
      dependencies: ['articleSetup']
    },

    {
      name: 'likeCounterGlobal',
      testMatch: 'likesCounterGlobal.spec.ts',
      use: { ...devices['Desktop Chrome'], storageState: '.auth/user.json' },
    },
  ],
});
