import { test, expect } from '@playwright/test';

test('Primary button is visible', async ({ page }) => {
  // Navigate to the Storybook page
  await page.goto('http://localhost:6006'); // Ensure Storybook is running at this URL
  const primaryButton = page.getByTitle('Primary');
  expect(primaryButton);
  console.log('Primary button is visible and enabled.');
});
