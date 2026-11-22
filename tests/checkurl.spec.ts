import { test, expect } from '@playwright/test';

test('Check the landing o right URL', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  
});
