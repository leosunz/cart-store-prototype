import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardProps } from '../types/main-card-props';

// This is the component that implements an product item in the grid.
// ----- Props Info -----
// title: The title of product item
// imageUrl: The image url of product item
// url: The route url of product item to be navigated for item detail page.
// prices: The price info of the item
// onEmit: The delegator for the Add to Cart button click event to the parent component `Products` component defined in the products.tsx.
const MainCard = (props: CardProps) => {
  const {
    title,
    imageUrl,
    onEmit,
  } = props;

  // Image src error handling
  const handleImageError = (e: React.ChangeEvent<HTMLImageElement>) => {
    e.target.onerror = null; 
    e.target.src = "https://via.placeholder.com/250";
  }

  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: 'none', width: '100%'}}>
      <CardMedia
        component="img"
        height="140"
        image={`${imageUrl}`}
        alt="green iguana"
        onError={handleImageError}
        sx={{width: '100%', height: 'auto'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{textAlign: 'center', width: '100%'}}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEmit(props)}>Add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default MainCard;
