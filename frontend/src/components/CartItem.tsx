import * as React from 'react';
import Card from '@mui/material/Card';
import {Grid} from '@mui/material';
  
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CartItemProps } from '../types/cart-item-props';

// This is the component that implements the cart item in the cart store.
// ----- Props Info -----
// item: The cart item data
// onIncrement: The delegator for the + click event(for increment) to the parent componenet - `cart`(for cart list)
// onDecrement: The delegator for the - click event(for decrement) to the parent componenet - `cart`(for cart list)
// onRemove: The delegator for the x click event(for remove) to the parent componenet `Cart` defined in the cart.tsx
const CartItem = (props: CartItemProps) => {
  const {
    item,
    onIncrement,
    onDecrement,
    onRemove,
  } = props;

  // Image src error handling
  const handleImageError = (e: React.ChangeEvent<HTMLImageElement>) => {
    e.target.onerror = null; 
    e.target.src = "https://via.placeholder.com/70";
  }

  return (
    <Card sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', boxShadow: 'none', px: { xs: 2, md: 1, lg: 1}}}>
      <Grid container spacing={2} sx={{ mb: { xs: 2.5, md: 0 } }}>
        <Grid item xs={6} md={1} lg={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <CardMedia
            component="img"
            image={`${item.product.imageUrl}`}
            alt="green iguana"
            sx={{width: '70px', height: '70px'}}
            onError={() => handleImageError}
          />
        </Grid>
        <Grid item xs={5} md={6} lg={6}  sx={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
            <Typography gutterBottom variant="h6" component="div">
              {item.product ? item.product.title : ''}
            </Typography>
        </Grid>
        <Grid item xs={6} md={3} lg={3} sx={{display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
          <CardActions  sx={{display: 'flex', justifyContent: 'end'}}>
            <Button size="small" onClick={() => onIncrement()}>
                <Typography gutterBottom variant="h6" component="div">+</Typography>
            </Button>
            <Typography variant="body1" color="text.primary">
              {item.count}
            </Typography>
            <Button size="small" onClick={() => onDecrement()}>
                <Typography gutterBottom variant="h6" component="div">-</Typography>
            </Button>
            <Button size="small" onClick={() => onRemove()}>
                <Typography gutterBottom variant="h6" component="div">x</Typography>
            </Button>
          </CardActions>
        </Grid>
        <Grid item xs={4} md={2} lg={2} sx={{display: 'flex', alignItems: 'center', justifyContent: 'end', pr: 1}}>
            <Typography gutterBottom variant="h6" component="div" sx={{textAlign: 'right'}}>
              {item.price ? item.price.toFixed(2) : '0'}
            </Typography>
        </Grid>
      </Grid>      
    </Card>
  );
};

export default CartItem;
