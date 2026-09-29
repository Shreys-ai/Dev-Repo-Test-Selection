const { productsLocators } = require('../locators/products.locator');

class ProductsPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToProducts() {
    await this.page.click(productsLocators.PRODUCTS_TAB);
    await this.page.waitForSelector(productsLocators.PRODUCTS_SECTION, { state: 'visible' });
  }

  async waitForProductsLoaded() {
    await this.page.waitForSelector(productsLocators.PRODUCT_CARD, { state: 'visible', timeout: 15000 });
  }

  async getProductCount() {
    const cards = await this.page.locator(productsLocators.PRODUCT_CARD).all();
    return cards.length;
  }

  async getProductsHeadingText() {
    return this.page.locator(productsLocators.PRODUCTS_HEADING).textContent();
  }

  async getFirstProductName() {
    return this.page.locator(productsLocators.PRODUCT_NAME).first().textContent();
  }

  async searchProducts(term) {
    const input = this.page.locator(productsLocators.SEARCH_INPUT);
    await input.clear();
    await input.fill(term);
  }

  async selectCategory(category) {
    await this.page.locator(productsLocators.CATEGORY_DROPDOWN).selectOption(category);
  }

  async fillAddProductForm({ name, price, category, stock, description }) {
    if (name) await this.page.locator(productsLocators.PRODUCT_NAME_INPUT).fill(name);
    if (price) await this.page.locator(productsLocators.PRICE_INPUT).fill(price);
    if (category) await this.page.locator(productsLocators.CATEGORY_INPUT).fill(category);
    if (stock) await this.page.locator(productsLocators.STOCK_INPUT).fill(stock);
    if (description) await this.page.locator(productsLocators.DESCRIPTION_INPUT).fill(description);
  }

  async submitAddProduct() {
    await this.page.locator(productsLocators.ADD_BUTTON).click();
  }

  async isNoProductsMessageVisible() {
    return this.page.locator(productsLocators.NO_PRODUCTS_MESSAGE).isVisible();
  }

  async getNoProductsMessageText() {
    return this.page.locator(productsLocators.NO_PRODUCTS_MESSAGE).textContent();
  }

  async getCategoryOptions() {
    const options = await this.page.locator(`${productsLocators.CATEGORY_DROPDOWN} option`).allTextContents();
    return options;
  }

  async isLowStockIndicatorVisible() {
    return this.page.locator(productsLocators.LOW_STOCK_INDICATOR).first().isVisible().catch(() => false);
  }

  async getAllProductNames() {
    return this.page.locator(productsLocators.PRODUCT_NAME).allTextContents();
  }
}

module.exports = { ProductsPage };
