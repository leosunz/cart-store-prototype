import { CartItem } from './cart-item'

interface CartState {
  cartItems: CartItem[]
  totalPrice: number
  onCartInfoChanged: (CartItem, string) => void
}
