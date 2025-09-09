//Step-by-Step Procedure: Recording with Codegen
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Set longer timeout for demo purposes
  test.setTimeout(120_000);  // 120 seconds

  // Navigate to Amazon
  await page.goto('https://www.amazon.in/');

  // Search for wireless headphones
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('wireless headphones');
  await page.getByRole('button', { name: 'Go', exact: true }).click();

  // Filter by rating (4 stars and up)
  await page.getByRole('link', { name: 'Apply the filter 4 Stars & Up' }).click();
  const page1Promise = page.waitForEvent('popup');

  // Click on first product
  await page.getByRole('link', { name: 'boAt Rockerz 113 (2025 Launch), 40 Hrs Playback, Dual Pair, Fast Charge, Enx Tech, Low Latency, Magnetic Buds, Bluetooth Neckband, Wireless with Mic in Ear Earphones(Active Black)', exact: true }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/boAt-Rockerz-Playback-Bluetooth-Earphones/dp/B0F7Y54PJX/ref=sr_1_3?crid=3O675XO80MFB0&dib=eyJ2IjoiMSJ9.WsMbJyrmTA2vznFyesRbKD_NGNTcXKC2N_1_W2afBmANNBPfVAILjDzDBDEA3RyPGOUg_wUeszb4ac23VNpb_UISehS-GC7b6lvXDoy0d_yMo9vl5ZmnBYRR1vn1GgGAx724ozOXJxP4SP_bzl87-IVC20cmLdyZRqf6hTyL_PrRvR9EJPqooXj5FckYjwxwJ_394F_cqsqW_MTcqbk3cVKyNj3Ezk3uCOejSJLvFH0.i48ukTxvAD8CznkGsyoFEhjNrDlWaO7zWvnDoPb-e5M&dib_tag=se&keywords=wireless%2Bheadphones&qid=1756882436&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=wireless%2Bheadphones%2Caps%2C321&sr=8-3&th=1');
  
  // Add to cart
  await page1.getByRole('button', { name: 'Add to Cart', exact: true }).click();

  // Go to cart
  await page1.locator('#sw-gtc').getByRole('link', { name: 'Go to Cart' }).click();

});