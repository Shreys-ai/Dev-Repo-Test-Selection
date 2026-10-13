const { test, expect } = require("@playwright/test");

const BASE_URL = "https://immunity-rule-naturist.ngrok-free.dev";

test.describe("Product Filter Load Test", () => {
  // 1. Get All Products (No Filter)
  test("Get All Products - No Filter", async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/api/products`, {
      waitUntil: "load",
    });
    expect(response.status()).toBe(200);
  });

  // 2. Filter by Category (Electronics)
  test("Filter Products - By Category (Electronics)", async ({ page }) => {
    const response = await page.goto(
      `${BASE_URL}/api/products?category=Electronics`,
      { waitUntil: "load" }
    );
    expect(response.status()).toBe(200);
  });

  // 3. Filter by Price Range ($100-$500)
  test("Filter Products - By Price Range ($100-$500)", async ({ page }) => {
    const response = await page.goto(
      `${BASE_URL}/api/products?minPrice=100&maxPrice=500`,
      { waitUntil: "load" }
    );
    expect(response.status()).toBe(200);
  });

  // 4. Filter by Category + Price Range + Sort (Combined)
  test("Filter Products - Category + Price + Sort (Combined)", async ({
    page,
  }) => {
    const response = await page.goto(
      `${BASE_URL}/api/products?category=Electronics&minPrice=50&maxPrice=1000&sort=price_asc`,
      { waitUntil: "load" }
    );
    expect(response.status()).toBe(200);
  });

  // 5. Sort by Price Descending with Limit
  test("Filter Products - Sort Price Desc + Limit", async ({ page }) => {
    const response = await page.goto(
      `${BASE_URL}/api/products?sort=price_desc&limit=5`,
      { waitUntil: "load" }
    );
    expect(response.status()).toBe(200);
  });
});
