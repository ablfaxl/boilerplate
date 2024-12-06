import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  const webLink = 'http://localhost:3000';

  // Test to check if the Next.js logo is visible
  test('should display the Next.js logo', async ({ page }) => {
    await page.goto(webLink); // Navigate to the home page

    // Check if the Next.js logo is visible
    const logo = page.locator('img[alt="Next.js logo"]');
    await expect(logo).toBeVisible();
  });

  // Test to check the "Deploy now" button's href attribute
  test('should display the deployment link', async ({ page }) => {
    await page.goto(webLink);

    // Check for the "Deploy now" button
    const deployLink = page.locator('a:has-text("Deploy now")');
    await expect(deployLink).toHaveAttribute('href', /vercel.com\/new/);
  });

  // Test to check the "Read our docs" button navigation
  // If you want to test a local URL, you could change your link in the component to:
  // href="/docs" and then use the following line:
  // await expect(page).toHaveURL(/\/docs/);
});
