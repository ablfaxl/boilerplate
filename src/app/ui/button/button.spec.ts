import { test, expect } from '@playwright/test';

test.describe('Button Component', () => {
  test('should render button with children text', async ({ page }) => {
    // Navigate to the page where your Button component is rendered
    await page.goto('http://localhost:3000'); // Make sure the app is running on this URL

    // Locate the button element
    const button = page.locator('button');

    // Verify that the button contains the text "Click Me"
    await expect(button).toHaveText('Hello Boilerplate');
  });

  test('should respond to click event', async ({ page }) => {
    // Navigate to the page where your Button component is rendered
    await page.goto('http://localhost:3000'); // Ensure the app is running

    // Locate the button
    const button = page.locator('button');

    // Click the button
    await button.click();

    // Add any additional assertions to verify the result of the click
    // Example: Check if the button text changes after click
    // await expect(button).toHaveText('Clicked');
  });
});
