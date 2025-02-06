# Assignment for Saltmine
This is the assignment which is being submited.
This is a OOP JS Code especially to handle Cart Transactions efficientely.
Solid Principles could be used but as per the instructions it is not used

## To run the project
### Start the server
Use the command `npm run serve-products` to run the server

### The unit test file can be run using the command
`node test.js`

Also the feature can be tested manualy using the command
`node cart.js`



# Test Cases

### 1. Add Product to Cart

| **Test Case**                         | **Test Description**                                                            | **Test Steps**                                                                                                                                                 | **Expected Outcome**                                                                                                    |
|---------------------------------------|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Adding a product to the cart         | Ensure that a product is added to the cart correctly, and the product price is fetched from the Price API. | 1. Add `1 x cheerios` to the cart.<br> 2. Check the cart summary to confirm that the product is added.                                                        | The cart contains 1 unit of cheerios with the correct price retrieved from the API.<br> The cart subtotal is updated.   |
| Adding multiple quantities of the same product | Ensure that the same product can be added multiple times, and the quantity is updated accordingly. | 1. Add `2 x cornflakes` to the cart.<br> 2. Add another `1 x cornflakes`.<br> 3. Check the cart summary.                                                      | The cart contains 3 units of cornflakes, with the price correctly calculated based on the quantity.                      |

### 2. Remove Product from Cart

| **Test Case**                         | **Test Description**                                                            | **Test Steps**                                                                                                                                                 | **Expected Outcome**                                                                                                    |
|---------------------------------------|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Removing a product from the cart     | Ensure that a product can be removed from the cart, and the cart updates correctly. | 1. Add `1 x weetabix` to the cart.<br> 2. Remove `1 x weetabix`.<br> 3. Check the cart summary.                                                              | The cart no longer contains weetabix.<br> The cart subtotal updates accordingly.                                          |
| Removing a non-existent product     | Ensure that trying to remove a product not in the cart doesn't cause errors.    | 1. Add `1 x cheerios` to the cart.<br> 2. Attempt to remove `1 x frosted flakes`.<br> 3. Check the cart summary.                                               | No error occurs.<br> The cart remains unchanged and the correct products are still in the cart.                           |

### 3. Cart Calculations

| **Test Case**                         | **Test Description**                                                            | **Test Steps**                                                                                                                                                 | **Expected Outcome**                                                                                                    |
|---------------------------------------|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Calculating subtotal correctly       | Ensure that the subtotal is calculated as the sum of the product prices.        | 1. Add `2 x cornflakes` and `1 x weetabix` to the cart.<br> 2. Check the cart subtotal.                                                                       | The subtotal is correctly calculated as the sum of the prices of all products in the cart.                               |
| Applying tax correctly               | Ensure that the tax is calculated as 12.5% of the subtotal.                      | 1. Add `1 x cornflakes` and `2 x weetabix` to the cart.<br> 2. Check the tax applied based on the subtotal.                                                    | Tax is calculated as 12.5% of the subtotal.<br> The tax is rounded if necessary.                                        |
| Calculating total correctly          | Ensure that the total is calculated as the sum of the subtotal and tax.         | 1. Add `1 x cornflakes` and `2 x weetabix` to the cart.<br> 2. Check the total payable, which is the subtotal plus tax.                                         | The total payable is correctly calculated.<br> It is the sum of the subtotal and tax, rounded as necessary.             |

### 4. Edge Cases

| **Test Case**                         | **Test Description**                                                            | **Test Steps**                                                                                                                                                 | **Expected Outcome**                                                                                                    |
|---------------------------------------|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Adding a product with zero quantity  | Ensure that adding a product with a quantity of 0 doesn't change the cart.      | 1. Add `0 x cheerios` to the cart.<br> 2. Check the cart summary.                                                                                             | The product is not added to the cart.<br> The cart remains unchanged.                                                    |
| Adding an invalid product            | Ensure that adding a non-existent product does not crash the cart.              | 1. Attempt to add `1 x nonexistentproduct` to the cart.<br> 2. Check the cart summary.                                                                        | An error message or validation should occur.<br> The cart should remain unchanged.                                        |

### 5. Multiple Operations Test

| **Test Case**                         | **Test Description**                                                            | **Test Steps**                                                                                                                                                 | **Expected Outcome**                                                                                                    |
|---------------------------------------|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| Performing multiple operations       | Test a sequence of different cart operations (add, remove, calculate).           | 1. Add `1 x cheerios`.<br> 2. Add `2 x cornflakes`.<br> 3. Remove `1 x cheerios`.<br> 4. Check the cart subtotal, tax, and total.<br> 5. Add `1 x weetabix`.      | The cart updates correctly at each step.<br> Subtotal, tax, and total are calculated accurately.                         |

---

### Notes

- **API Integration**: Ensure proper integration with the Price API and handle errors (e.g., non-existent products).
