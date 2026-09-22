const productsLocators = {
  // Navigation
  PRODUCTS_TAB: 'button.nav-tab:has-text("Products")',

  // Add Product form
  ADD_PRODUCT_HEADING: '.form-section h2',
  PRODUCT_NAME_INPUT: '.product-form input[placeholder="Product Name"]',
  PRICE_INPUT: '.product-form input[placeholder="Price"]',
  CATEGORY_INPUT: '.product-form input[placeholder="Category"]',
  STOCK_INPUT: '.product-form input[placeholder="Stock"]',
  DESCRIPTION_INPUT: '.product-form textarea[placeholder="Description"]',
  ADD_BUTTON: '.product-form button[type="submit"]',

  // Filters
  SEARCH_INPUT: 'input.product-search-input',
  CATEGORY_DROPDOWN: '.products-section select',

  // Products list
  PRODUCTS_SECTION: '.products-section',
  PRODUCTS_HEADING: '.products-section h2',
  PRODUCTS_GRID: '.products-grid',
  PRODUCT_CARD: '.product-card',
  PRODUCT_NAME: '.product-card h3',
  PRODUCT_PRICE: '.product-card .price',
  PRODUCT_CATEGORY: '.product-card .category',
  PRODUCT_STOCK: '.product-card .stock',
  PRODUCT_DESCRIPTION: '.product-card .description',
  LOW_STOCK_INDICATOR: '.product-card .stock.low-stock',
  NO_PRODUCTS_MESSAGE: '.products-grid p',
};

module.exports = { productsLocators };
