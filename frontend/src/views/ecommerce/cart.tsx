
import { Box, Typography } from '@mui/material';
import { CartState } from '../../types/type';
import CartItem from '../../components/CartItem';
import { CartItemType } from '../../types/cart-item';

// This is the component implementing the cart store
// ----- Props Info -----
// cartItems: The list of items to be populated in the cart store. This prop automatically comes from the pare../../types/typent overtime whenever it's updated.
// totalPrice: The total price of items in the cart store
// onCartInfoChanged: This is the function for delegating any events of cart store to the parent component
const Cart = (props: CartState) => {
  const { cartItems, totalPrice, onCartInfoChanged } = props;

  // + button is clicked for increment of item count
  const onIncrement = (item: CartItemType) => {
    onCartInfoChanged(item, "inc");
  }

  // - button is clicked for increment of item count
  const onDecrement = (item: CartItemType) => {
    onCartInfoChanged(item, "dec");
  }

  // x button is clicked for removal of item in the cart store
  const onRemove = (item: CartItemType) => {
    onCartInfoChanged(item, "remove");
  }

  // Composing the DOM elements to render the items in the cart store.
  // `CartItem` component is for rendering one cart item.
  const renderData = cartItems.map((item, id) => {
    return <Box key={id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid gray;', py: 1, my: 1}}>
      <CartItem
        item={item}
        onIncrement={() => onIncrement(item)}
        onDecrement={() => onDecrement(item)}
        onRemove={() => onRemove(item)}
      />
    </Box>
  });

  return (
    <>
      Cart
      {renderData}  
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
        <Typography gutterBottom variant="h6" component="div">
          Total: {totalPrice.toFixed(2)}
        </Typography>
      
      </Box>
    </>
  )
}

export default Cart;
