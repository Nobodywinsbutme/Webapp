![alt text](</Picture/Screenshot 2025-10-25 231111.png>)

Shopping Cart – Function Documentation

addToCart(productId)

- Checks if the product already exists in the cart array.

- If it does, increments its quantity.

- If not, finds the product in the products list and adds it to the cart with quantity = 1.

- Calls renderCart() and calculateTotal() to refresh the UI.
removeFromCart(id)
- Filters out the product with the matching id from the cart array.

- Re-renders the cart and recalculates totals using renderCart() and calculateTotal().
updateQuantity(id, change)
Parameters:

- id: Product ID.

- change: Either +1 (increase) or -1 (decrease).

Process:

- Finds the item by id inside cart.

- Adds change to its current quantity.

- If the quantity becomes 0 or less, the item is removed from the cart.

- Calls renderCart() and calculateTotal() to refresh the UI.

calculateTotal()

- Loops through all items in cart, summing up:

    - total = price × quantity

    - count = total number of items

- Updates:

    - #cartCount (badge beside 🛒 icon)

    - #cartTotal (displayed total price in the cart section)

renderProducts()

- Clears and rebuilds the #productsGrid section.

- For each product in the products array, generates a .product-card with:

    - Emoji image

    - Product name

    - Product price

    - “Add to Cart” button (calls addToCart(id))

renderCart()

- Clears the #cartItems container.

- If cart is empty → shows “Your cart is empty.”

- Otherwise → builds a list of .cart-item elements, each with:

    - Product name and price

    - Quantity controls (+, –)

    - Remove button (✖)

toggleCart()

- Toggles the display style of #cartSection between 'none' and 'block'.