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

    // Check for the "Deploy now" button and verify its link
    const deployLink = page.locator('a:has-text("Deploy now")');
    await expect(deployLink).toHaveAttribute('href', /vercel.com\/new/);
  });

  test('should navigate to documentation page when "Read our docs" is clicked', async ({
    page,
  }) => {
    await page.goto(webLink);

    // Locate the "Read our docs" button and click it
    const docsLink = page.locator('a:has-text("Read our docs")');
    await docsLink.click();

    // Ensure the URL is correct after clicking the "Read our docs" button
    await expect(page).toHaveURL(
      'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
    );
  });

  test('should navigate to Vercel deploy page when "Deploy now" is clicked', async ({
    page,
  }) => {
    await page.goto(webLink);

    // Locate the "Deploy now" button and click it
    const deployLink = page.locator('a:has-text("Deploy now")');
    await deployLink.click();

    // Ensure the URL is correct after clicking the "Deploy now" button
    await expect(page).toHaveURL(
      'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
    );
  });
});
