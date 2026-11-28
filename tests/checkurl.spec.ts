import { test, expect } from '@playwright/test';

test('Check the landing of right URL', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  //expect 
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  
});
