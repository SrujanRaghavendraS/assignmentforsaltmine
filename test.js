const Cart = require('./cart');

async function runTests() {
  const cart = new Cart();

  console.log("Starting tests...\n");

  await testAddProduct(cart);
  await testAddMultipleProducts(cart);
  await testRemoveProduct(cart);
  await testRemoveNonExistentProduct(cart);
  await testRemoveLastItem(cart);
  await testAddProductWithZeroQuantity(cart);
  await testAddAndRemoveOperations(cart);
  await testMultipleAdditionsAndRemovals(cart);

  console.log("All tests completed.");
}

async function testAddProduct(cart) {
  await cart.addProduct('cheerios', 2);
  cart.printCartSummary();
  console.log("\n");
}

async function testAddMultipleProducts(cart) {
  await cart.addProduct('cornflakes', 3);
  await cart.addProduct('frosties', 1);
  cart.printCartSummary();
  console.log("\n");
}

async function testRemoveProduct(cart) {
  cart.removeProduct('cheerios');
  cart.printCartSummary();
  console.log("\n");
}

async function testRemoveNonExistentProduct(cart) {
  cart.removeProduct('shreddies');
  cart.printCartSummary();
  console.log("\n");
}

async function testRemoveLastItem(cart) {
  await cart.addProduct('weetabix', 1);
  cart.removeProduct('weetabix');
  cart.printCartSummary();
  console.log("\n");
}

async function testAddProductWithZeroQuantity(cart) {
  await cart.addProduct('cheerios', 0);
  cart.printCartSummary();
  console.log("\n");
}

async function testAddAndRemoveOperations(cart) {
  await cart.addProduct('cheerios', 2);
  await cart.addProduct('cornflakes', 1);
  await cart.removeProduct('cheerios');
  await cart.addProduct('frosties', 3);
  cart.printCartSummary();
  console.log("\n");
}

async function testMultipleAdditionsAndRemovals(cart) {
  await cart.addProduct('cheerios', 2);
  await cart.addProduct('cornflakes', 3);
  await cart.addProduct('frosties', 1);
  await cart.addProduct('shreddies', 5);
  await cart.removeProduct('cheerios');
  await cart.removeProduct('cornflakes');
  await cart.addProduct('weetabix', 2);
  
  cart.printCartSummary();
  console.log("\n");
}

runTests();
