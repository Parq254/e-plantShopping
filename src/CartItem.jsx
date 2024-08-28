import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
 
    function calculateTotalAmount(cart) {
      let totalCost = 0;
  
      // Iterate through each item in the cart
      for (const item of cart) {
          // Multiply the quantity by the cost for each item
          totalCost += item.quantity * item.cost;
      }
  
      return totalCost;
  }
  
  // Example usage:
  const cart = [
      { name: 'Plant A', quantity: 2, cost: 10 },
      { name: 'Plant B', quantity: 3, cost: 15 },
      // Add more items as needed
  ];
  
  const totalAmount = calculateTotalAmount(cart);
  console.log(`Total cost of items in the cart: $${totalAmount}`);
  
  };

  const handleContinueShopping = (e) => {
    // Inside your shopping cart component
function ShoppingCart({ cartItems, handleContinueShopping }) {
  // ... other code ...

  const handleContinueShoppingClick = () => {
      // Call the function passed from the parent component
      handleContinueShopping();
      // You can also perform any additional actions here if needed
  };
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  return (
      <div>
          {/* Your shopping cart content */}
          {/* Add a button or link to continue shopping */}
          <button onClick={handleContinueShoppingClick}>Continue Shopping</button>
      </div>
  );
}

   
  };



  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
        dispatch(removeItem(item.id));
      } else {
        dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
      }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return item.quantity * item.cost;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


