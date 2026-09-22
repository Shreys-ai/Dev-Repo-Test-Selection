const productsConstants = {
  PAGE_TITLE: 'Products',
  ADD_PRODUCT_HEADING: 'Add New Product',
  SEARCH_PLACEHOLDER: 'Search products...',
  ALL_CATEGORIES_OPTION: 'All Categories',
  NO_PRODUCTS_MESSAGE: 'No products found.',
  ADD_BUTTON_TEXT: 'Add Product',

  // Default seed products from the backend
  DEFAULT_PRODUCTS: [
    { name: 'Laptop', category: 'Electronics', price: 999.99 },
    { name: 'Smartphone', category: 'Electronics', price: 699.99 },
    { name: 'Headphones', category: 'Electronics', price: 149.99 },
    { name: 'Coffee Maker', category: 'Home', price: 79.99 },
    { name: 'Book', category: 'Education', price: 29.99 },
  ],

  // Test product for add form
  TEST_PRODUCT: {
    name: 'VRT Test Widget',
    price: '42.99',
    category: 'Testing',
    stock: '100',
    description: 'Product created by VRT test',
  },

  // Search term that matches no products
  NO_MATCH_SEARCH: 'zzz_no_match_xyz',
};

module.exports = { productsConstants };
