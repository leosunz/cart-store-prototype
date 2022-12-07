import { ADD_CART_ITEM, DELETE_CART_ITEM, UPDATE_CART_ITEM, UPDATE_TOTAL_PRICE } from "./actionTypes";
import { CartItemType } from "../types/cart-item";
import { Product } from "../types/product";
const initState = {
  cartItems: [] as CartItemType[],
  totalPrice: 0,
};

// Define the cart store reducer
const cart = (state = initState, action: any ) => {
  switch (action.type) {
    case ADD_CART_ITEM: // If gonna to add an product item to the cart store
      // Casting the param action.payload to the Product type.
      const prod = action.payload as Product;
      
      // Checks whether the selected item already exists in the cart store.
      // Available to add to the cart store only when there is no existing item.
      const searchResult = state.cartItems.filter((item) => item.product.id == prod.id);
      if (searchResult.length == 0) {// If available, (meaning no existing item on the store)
        // Add the item to the cart store with default count 1
        return {
            ...state,
            cartItems: [...state.cartItems, {
                product: action.payload,
                count: 1,
                price:prod.prices![0].amount,
            }],
            totalPrice: prod.prices![0].amount,
        };
      }
      else return {...state};
    case DELETE_CART_ITEM: // If gonna to delete the item from the cart store
      const cartItem = action.payload as CartItemType;
      // Delete the item from the cart store
      return {
        ...state,
        cartItems: [...state.cartItems].filter((item) => item.product.id !== cartItem.product.id),
      };
    case UPDATE_CART_ITEM: // If gonna to update the item in the cart store
      const cartItem1 = action.payload as CartItemType;
      // Find the item in the list and update its data with new one
      return {
        ...state,
        cartItems: [...state.cartItems].map((item) => {
          if (item.product.id === cartItem1.product.id) {
            return { product: cartItem1.product, count: cartItem1.count, price: cartItem1.count * cartItem1.product.prices![0].amount };
          } else return item;
        }),
      };
    case UPDATE_TOTAL_PRICE: // If gonna to recalculate the total price of the cart store
      let totalPriceValue = 0;
      // Iterating all the cart items for summing up the prices into the `totalPrice`
      [...state.cartItems].map((item) => {
        totalPriceValue += item.price!;
      })
      // Update the cart store with new recalculted total price.
      return {
        ...state,
        totalPrice: totalPriceValue
      };
    default:
      return state;
  }
};

export default cart;
