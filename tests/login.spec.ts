import {test,expect} from '@playwright/test'

test('Login page', async({page})=>{
    await page.goto("https://www.saucedemo.com/");

   //assertion
    await expect(page.locator('.login_logo')).toHaveText('Swag Labs');
     //Locators
    await page.getByText('Swag Labs',{exact:true}).textContent();
    await page.locator('.login_logo',{hasText:'Swag Labs'});

    await page.locator('#user-name').fill("standard_user");


    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page.locator('.title')).toHaveText("Products");
    
});