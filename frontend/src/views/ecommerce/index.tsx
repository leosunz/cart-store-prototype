import { useEffect, useState } from 'react';

import Cart from './cart';
import Products from './products';
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, updateCartItem, deleteCartItem, updateTotalPrice } from '../../store/actionCreator';
import { CartState } from '../../types/type';
import { CartItemType } from '../../types/cart-item';
import { Product } from '../../types/product';

// =============================|| E-COMMERCE MAIN ||============================= //
// This component consists of two components - Cart Store component and Product List component
// It handles all the events including add item to cart
const ECommerce = () => {
  // The product items stored in the cart store into the cartItems, total price of cart items into totalPrice.
  const cartItems = useSelector((state: CartState) => state.cartItems);
  const totalPrice = useSelector((state: CartState) => state.totalPrice);
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  // This function is called when clicking Add to Cart button is clicked on a product item.
  // Store the clicked item to cart store by dispatching an ADD_CART_ITEM action with selected product item.
  const onItemCart = (data: Product) => {
    dispatch(addCartItem(
      data
    ));

    // Recalculate the total price in the cart store
    dispatch(updateTotalPrice());
  }

  // This function is called when an action has been performed in the cart store.
  // Action could be any of three
  // 1. Increment of cart item count
  // 2. Decrement of cart item count
  // 3. Remove the cart item
  const onCartInfoChanged = (data: CartItemType, action: string) => {
    if (action === 'inc') // Increment of cart item count
      dispatch(updateCartItem({
          product: data.product,
          count: data.count + 1,
        } 
      ));
    else if ((action === 'dec') && (data.count > 0)) // Decrement of cart item count
      dispatch(updateCartItem({
          product: data.product,
          count: data.count - 1,
        } 
      ));
    else if (action === 'remove') // Remove of cart item count
      dispatch(deleteCartItem(data));
    
    // Recalculate the total price in the cart store
    dispatch(updateTotalPrice());
  }

  useEffect(() => {
    // Get the product list info into the status `products`
    fetch('http://localhost:8181/products', { credentials: 'include' })
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject(`Cannot communicate with the mocked REST API server (${response.statusText})`),
      )
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
      });
  }, [])
  return (
    <>
      <Cart
        totalPrice={totalPrice}
        cartItems={cartItems}
        onCartInfoChanged={(data, action) => onCartInfoChanged(data, action)}
      />
      <Products productList={products} onItemCart={onItemCart} />
    </>
  );
}

export default ECommerce;
