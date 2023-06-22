import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart } from '@mui/icons-material';
import './style.css';
const ProductFlashare = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const ToProduct = () => {
    navigate(`/product-detail/${props.data.product.name}`, {
      state: { data: props.data.product, p_price: props.data.p_price },
    });
  };
  const addToCart = () => {};
  return (
    <Box className={classes.container_item_product}>
      <Box className={classes.container_img_item_product}>
        <img
          className={classes.img_item_product}
          src={props.data && props.data.product.thumbnail}
        />
      </Box>
      <Box className={classes.body_item_product}>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 1,
            marginTop: 1,
            textAlign: 'center',
            cursor: 'pointer',
          }}
          onClick={() => ToProduct()}
        >
          {props.data && props.data.product.name}
        </Typography>

        <Box className={classes.price_item_product}>
          <Typography sx={{ textDecorationLine: 'line-through' }}>
            {props.data && props.data.product.color[0].size[0].price}
          </Typography>
          <Typography variant="h3" color="text.secondary">
            {' '}
            {props.data &&
              parseInt(props.data.product.color[0].size[0].price) -
                parseInt(props.data.p_price)}
          </Typography>
        </Box>
        {/* <Typography
          variant="body1"
          sx={{ textAlign: 'center', cursor: 'pointer', marginTop: 1 }}
        >
          Them vao gio hang
        </Typography> */}
      </Box>
    </Box>
  );
};

export default ProductFlashare;
