import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  const webLink = 'http://localhost:3000';
  test('should display the Next.js logo', async ({ page }) => {
    await page.goto(webLink); // Navigate to the home page

    // Check if the Next.js logo is visible
    const logo = page.locator('img[alt="Next.js logo"]');
    await expect(logo).toBeVisible();
  });

  test('should display the deployment link', async ({ page }) => {
    await page.goto(webLink);

    // Check for the "Deploy now" button
    const deployLink = page.locator('a:has-text("Deploy now")');
    await expect(deployLink).toHaveAttribute('href', /vercel.com\/new/);
  });

  test('should navigate to documentation page', async ({ page }) => {
    await page.goto(webLink);

    // Click on the "Read our docs" button
    const docsLink = page.locator('a:has-text("Read our docs")');
    await docsLink.click();

    // Ensure the correct URL
    await expect(page).toHaveURL(/nextjs.org\/docs/);
  });
});
