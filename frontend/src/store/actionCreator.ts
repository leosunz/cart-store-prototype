import { CartItemType } from "../types/cart-item";
import { Product } from "../types/product";
import * as actionTypes from "./actionTypes";

// Action for adding an item onto the cart store
export const addCartItem = (item: Product) => {
    return {
        type: actionTypes.ADD_CART_ITEM,
        payload: item,
    }
}

// Action for deleting an item from the cart store
export const deleteCartItem = (item: CartItemType) => {
    return {
        type: actionTypes.DELETE_CART_ITEM,
        payload: item,
    }
};

// Action for updating an item in the cart store
export const updateCartItem = (item: CartItemType) => {
    return {
        type: actionTypes.UPDATE_CART_ITEM,
        payload: item,
    }
};

// Action for updating the total price with new cart store info
export const updateTotalPrice = () => {
    return {
        type: actionTypes.UPDATE_TOTAL_PRICE
    }
}