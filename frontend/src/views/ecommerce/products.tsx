import MainCard from '../../components/MainCard';

// material-ui
import { Box, Grid } from '@mui/material';

import { Product } from '../../types/product';
import { ProductListProps } from '../../types/product-list-props';

// This is the component where product items data are rendered and managed
// It gets the props from parent component which includes the product items list info.
// ----- Props Info -----
// productList: The list of product items
// onItemCart: The function to delegate the Add To Cart click event to the parent
const Products = (props: ProductListProps) => {

  // Get the props from the parent component into productList and onItemCart
  const { productList, onItemCart } = props;

  // This function is called when Add to Cart button on any product item is clicked.
  const onEmit = (data: Product) => {
    // Delegates the selected item to the parent component so that it could be finally stored in the cart store.
    onItemCart(data);
  }

  // Composing the DOM elements to render the product items on the page 
  const renderData = productList.map((item) => {
    return <Grid key={item.id} item xs={12} md={6} lg={3}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid gray;' }}>
        <MainCard
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          prices={item.prices}
          url={item.url}
          onEmit={onEmit}
        />
      </Box>
    </Grid>
  });

  return (
    <>
      <h1>Products</h1>
      <Grid container spacing={5} sx={{ mb: { xs: 2.5, md: 10 } }}>
        {renderData}
      </Grid>
    </>
  );
}

export default Products;
