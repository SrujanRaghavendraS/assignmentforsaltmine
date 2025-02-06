const readline = require('readline');

class Cart {
  constructor() {
    this.items = [];
    this.subtotal = 0;
    this.tax = 0;
    this.total = 0;
  }

  async addProduct(productName, quantity = 1) {
    const productPrice = await this.getProductPrice(productName);
    if (productPrice !== null) {
      const existingItem = this.items.find(item => item.name === productName);
      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.total = (existingItem.price * existingItem.quantity).toFixed(2);
      } else {
        const product = {
          name: productName,
          quantity: quantity,
          price: productPrice,
          total: (productPrice * quantity).toFixed(2)
        };
        this.items.push(product);
      }
      this.recalculateCart();
    } else {
      console.log("Product could not be added. Please check the product name.");
    }
  }

  removeProduct(productName) {
    const index = this.items.findIndex(item => item.name === productName);
    if (index !== -1) {
      const item = this.items[index];
      if (item.quantity > 1) {
        item.quantity -= 1;
        item.total = (item.price * item.quantity).toFixed(2);  
      } else {
        this.items.splice(index, 1); 
      }
      this.recalculateCart();
    } else {
      console.log("Item not in the list.");
    }
  }
  

  async getProductPrice(productName) {
    try {
      const response = await fetch(`http://localhost:3001/products/${productName}`);
      if (!response.ok) {
        throw new Error("Product not found");
      }
      const product = await response.json();
      return product.price;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  recalculateCart() {
    if (this.items.length === 0) {
      this.subtotal = 0;
      this.tax = 0;
      this.total = 0;
    } else {
      this.subtotal = this.items.reduce((acc, item) => acc + parseFloat(item.total), 0).toFixed(2);
      this.tax = (parseFloat(this.subtotal) * 0.125).toFixed(2);
      this.total = (parseFloat(this.subtotal) + parseFloat(this.tax)).toFixed(2);
    }
  }

  printCartSummary() {
    if (this.items.length === 0) {
      console.log("\nCart is empty.");
    } else {
      console.log("\nCart contains:");
      this.items.forEach((item, index) => {
        console.log(`${index + 1}. ${item.quantity} x ${item.name} @ ${item.price} each = ${item.total}`);
      });
      console.log(`Subtotal: $${this.subtotal}`);
      console.log(`Tax: $${this.tax}`);
      console.log(`Total: $${this.total}`);
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getUserInput(promptMessage) {
  return new Promise(resolve => {
    rl.question(promptMessage, resolve);
  });
}

async function showOptions() {
  console.log("\nChoose an option:");
  console.log("1. Add a product to the cart");
  console.log("2. Remove a product from the cart");
  console.log("3. View the cart");
  console.log("4. Exit");

  const option = await getUserInput("Enter your choice: ");

  if (option === "1") {
    await addProductToCart();
  } else if (option === "2") {
    await removeProductFromCart();
  } 
  else if (option=="3"){
    cart.printCartSummary();await showOptions();

  
  }
  else if (option === "4") {
    rl.close();
  } else {
    console.log("Invalid option. Please try again.");
    await showOptions();
  }
}

async function addProductToCart() {
  console.log("\nChoose a product to add:");
  console.log("1. Cheerios");
  console.log("2. Cornflakes");
  console.log("3. Frosties");
  console.log("4. Shreddies");
  console.log("5. Weetabix");

  const productChoice = await getUserInput("Enter the number of the product to add: ");

  let productName = "";
  if (productChoice === "1") {
    productName = "cheerios";
  } else if (productChoice === "2") {
    productName = "cornflakes";
  } else if (productChoice === "3") {
    productName = "frosties";
  } else if (productChoice === "4") {
    productName = "shreddies";
  } else if (productChoice === "5") {
    productName = "weetabix";
  } else {
    console.log("Invalid option. Please try again.");
    await addProductToCart();
    return;
  }

  await cart.addProduct(productName);
  cart.printCartSummary();
  await showOptions();
}

async function removeProductFromCart() {
  cart.printCartSummary();
  if (cart.items.length === 0) {
    console.log("Cart is empty, no items to remove.");
    await showOptions();
    return;
  }

  const productIndex = parseInt(await getUserInput("Enter the serial number of the product to remove: "), 10) - 1;
  if (productIndex >= 0 && productIndex < cart.items.length) {
    const productName = cart.items[productIndex].name;
    cart.removeProduct(productName);
    cart.printCartSummary();
  } else {
    console.log("Invalid serial number.");
  }
  await showOptions();
}

const cart = new Cart();

showOptions();

module.exports = Cart;