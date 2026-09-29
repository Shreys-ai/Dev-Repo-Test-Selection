const { test, expect } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');
const { ProductsPage } = require('../pages/products.page');
const { productsConstants } = require('../constants/products.constant');
const { productsLocators } = require('../locators/products.locator');

test.describe.configure({ mode: 'serial' });

test.describe('[VRT] Products Page @vrt @products @p0', () => {
  let productsPage;

  test.describe('Page Load Snapshots @products_load', () => {
    test('should capture Products page default state @p0', async ({ page }) => {
      await page.goto('/', { waitUntil: 'networkidle' });
      productsPage = new ProductsPage(page);
      await productsPage.navigateToProducts();
      await productsPage.waitForProductsLoaded();

      // Verify page loaded correctly before snapshot
      const count = await productsPage.getProductCount();
      expect(count).toBeGreaterThan(0);

      await percySnapshot(page, 'Products Page - Default State');
    });

    // test('should capture Add New Product form @p0', async ({ page }) => {
    //   await page.goto('/', { waitUntil: 'networkidle' });
    //   productsPage = new ProductsPage(page);
    //   await productsPage.navigateToProducts();
    //   const heading = page.locator(productsLocators.ADD_PRODUCT_HEADING);
    //   await expect(heading).toHaveText(productsConstants.ADD_PRODUCT_HEADING);
    //   await percySnapshot(page, 'Products Page - Add Product Form', { scope: '.form-section' });
    // });

    // test('should capture Products grid with all default products @p0', async ({ page }) => {
    //   await page.goto('/', { waitUntil: 'networkidle' });
    //   productsPage = new ProductsPage(page);
    //   await productsPage.navigateToProducts();
    //   await productsPage.waitForProductsLoaded();
    //   const headingText = await productsPage.getProductsHeadingText();
    //   expect(headingText).toMatch(/Products \(\d+\)/);
    //   await percySnapshot(page, 'Products Page - Products Grid', { scope: '.products-section' });
    // });
  });

  // test.describe('Product Cards Snapshots @products_cards', () => {
  //   test('should capture individual product card layout @p1', async ({ page }) => {
  //     await page.goto('/', { waitUntil: 'networkidle' });
  //     productsPage = new ProductsPage(page);
  //     await productsPage.navigateToProducts();
  //     await productsPage.waitForProductsLoaded();
  //     const prices = await page.locator(productsLocators.PRODUCT_PRICE).allTextContents();
  //     expect(prices.length).toBeGreaterThan(0);
  //     prices.forEach(price => { expect(price).toMatch(/^\$/); });
  //     await percySnapshot(page, 'Products Page - Product Card Detail', { scope: '.product-card:first-child' });
  //   });

  //   test('should capture low stock visual indicator @p1', async ({ page }) => {
  //     await page.goto('/', { waitUntil: 'networkidle' });
  //     productsPage = new ProductsPage(page);
  //     await productsPage.navigateToProducts();
  //     await productsPage.waitForProductsLoaded();
  //     const stocks = await page.locator(productsLocators.PRODUCT_STOCK).allTextContents();
  //     expect(stocks.length).toBeGreaterThan(0);
  //     await percySnapshot(page, 'Products Page - Stock Indicators');
  //   });
  // });

  // test.describe('Search & Filter Snapshots @products_filter', () => {
  //   test('should capture search results for "Laptop" @p0', async ({ page }) => {
  //     await page.goto('/', { waitUntil: 'networkidle' });
  //     productsPage = new ProductsPage(page);
  //     await productsPage.navigateToProducts();
  //     await productsPage.waitForProductsLoaded();
  //     await productsPage.searchProducts('Laptop');
  //     await page.waitForTimeout(500);
  //     const names = await productsPage.getAllProductNames();
  //     expect(names.length).toBeGreaterThan(0);
  //     expect(names.some(n => n.includes('Laptop'))).toBe(true);
  //     await percySnapshot(page, 'Products Page - Search Results Laptop');
  //   });

  //   test('should capture empty search state @p1', async ({ page }) => {
  //     await page.goto('/', { waitUntil: 'networkidle' });
  //     productsPage = new ProductsPage(page);
  //     await productsPage.navigateToProducts();
  //     await productsPage.waitForProductsLoaded();
  //     await productsPage.searchProducts(productsConstants.NO_MATCH_SEARCH);
  //     await page.waitForTimeout(500);
  //     const msg = await productsPage.getNoProductsMessageText();
  //     expect(msg).toBe(productsConstants.NO_PRODUCTS_MESSAGE);
  //     await percySnapshot(page, 'Products Page - No Products Found');
  //   });

  //   test('should capture category filter "Electronics" @p0', async ({ page }) => {
  //     await page.goto('/', { waitUntil: 'networkidle' });
  //     productsPage = new ProductsPage(page);
  //     await productsPage.navigateToProducts();
  //     await productsPage.waitForProductsLoaded();
  //     await productsPage.selectCategory('Electronics');
  //     await page.waitForTimeout(500);
  //     const categories = await page.locator(productsLocators.PRODUCT_CATEGORY).allTextContents();
  //     expect(categories.length).toBeGreaterThan(0);
  //     categories.forEach(cat => { expect(cat).toBe('Electronics'); });
  //     await percySnapshot(page, 'Products Page - Filtered by Electronics');
  //   });

  //   test('should capture category dropdown open state @p2', async ({ page }) => {
  //     await page.goto('/', { waitUntil: 'networkidle' });
  //     productsPage = new ProductsPage(page);
  //     await productsPage.navigateToProducts();
  //     await productsPage.waitForProductsLoaded();
  //     const dropdown = page.locator(productsLocators.CATEGORY_DROPDOWN);
  //     await dropdown.focus();
  //     const options = await productsPage.getCategoryOptions();
  //     expect(options[0]).toBe(productsConstants.ALL_CATEGORIES_OPTION);
  //     await percySnapshot(page, 'Products Page - Category Dropdown');
  //   });
  // });

  // test.describe('Add Product Form Snapshots @products_form', () => {
  //   test('should capture empty form state @p0', async ({ page }) => {
  //     await page.goto('/', { waitUntil: 'networkidle' });
  //     productsPage = new ProductsPage(page);
  //     await productsPage.navigateToProducts();
  //     await expect(page.locator(productsLocators.PRODUCT_NAME_INPUT)).toBeVisible();
  //     await expect(page.locator(productsLocators.ADD_BUTTON)).toBeVisible();
  //     await percySnapshot(page, 'Products Page - Empty Add Form');
  //   });

  //   test('should capture filled form state before submit @p1', async ({ page }) => {
  //     await page.goto('/', { waitUntil: 'networkidle' });
  //     productsPage = new ProductsPage(page);
  //     await productsPage.navigateToProducts();
  //     await productsPage.fillAddProductForm(productsConstants.TEST_PRODUCT);
  //     await percySnapshot(page, 'Products Page - Filled Add Form');
  //   });

  //   test('should capture grid after adding a new product @p0', async ({ page }) => {
  //     await page.goto('/', { waitUntil: 'networkidle' });
  //     productsPage = new ProductsPage(page);
  //     await productsPage.navigateToProducts();
  //     await productsPage.waitForProductsLoaded();
  //     const beforeCount = await productsPage.getProductCount();
  //     await productsPage.fillAddProductForm(productsConstants.TEST_PRODUCT);
  //     await productsPage.submitAddProduct();
  //     await page.waitForTimeout(1000);
  //     const afterCount = await productsPage.getProductCount();
  //     expect(afterCount).toBe(beforeCount + 1);
  //     const names = await productsPage.getAllProductNames();
  //     expect(names).toContain(productsConstants.TEST_PRODUCT.name);
  //     await percySnapshot(page, 'Products Page - After Adding Product');
  //   });
  // });
});
