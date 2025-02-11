import { test, expect } from '@playwright/test';

test('Log into AGUI', async ({ page }) => {
  await page.goto('https://sso.8x8pilot.com/v2/login');
  await page.getByRole('textbox', { name: 'Username / Email' }).fill('d50qamode3may.Agent.Two');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('');
  await page.getByRole('button', { name: 'Login' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Contact Center Agent' }).click();
  const page1 = await page1Promise;
  await page1.locator('iframe[name="control_frame"]').contentFrame().locator('[data-test-id="status-menu-trigger"]').click();
  await page1.locator('iframe[name="control_frame"]').contentFrame().getByRole('button', { name: 'Available' }).click();
});