import { test, expect } from '@playwright/test';

test('Home page renders correctly', async ({ page }) => {
  // Navigate to the Home page
  await page.goto('http://localhost:3000'); // Adjust the URL based on your local development server

  // Ensure the Title is visible
  const title = page.locator('h1');
  await expect(title).toHaveText('Welcome to Ablfaxl Boilerplate');
  await expect(title).toBeVisible();

  // Ensure the button is visible with the correct label
  const githubButton = page.locator('button:has-text("Github")');
  await expect(githubButton).toBeVisible();

  // Ensure the button contains the correct GitHub icon
  const githubIcon = githubButton.locator('svg');
  await expect(githubIcon).toBeVisible();

  // Ensure clicking the button opens the correct GitHub link in a new tab
  const [newTab] = await Promise.all([
    page.waitForEvent('popup'), // Wait for new tab to open
    githubButton.click(), // Click the GitHub button
  ]);

  await newTab.waitForURL('https://github.com/ablfaxl'); // Ensure the new tab's URL is correct
});
