//Launching Browsers
import { test } from '@playwright/test';
import { chromium, firefox, webkit } from 'playwright';

test('launch different browsers manually', async () => {
   // Set longer timeout for demo purposes
  test.setTimeout(120_000);  // 120 seconds
  console.log('🚀 Launching different browsers...');

  // Chromium
  const chromiumBrowser = await chromium.launch({ headless: false });
  console.log('✅ Chromium launched');
  await chromiumBrowser.close();

  // Firefox
  const firefoxBrowser = await firefox.launch({ headless: false });
  console.log('✅ Firefox launched');
  await firefoxBrowser.close();

  // WebKit
  const webkitBrowser = await webkit.launch({ headless: false });
  console.log('✅ WebKit launched');
  await webkitBrowser.close();

  console.log('🎉 All browsers launched and closed successfully.');
});
