import { test, expect } from '@playwright/test';

test('Log into CM', async ({ page }) => {
    await page.goto("/");
    await page.getByRole('textbox', { name: 'Username / Email' }).fill('s_hill3');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('');
    await page.getByRole('button', { name: 'Login' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Configuration Manager for' }).click();
    const page1 = await page1Promise;
});