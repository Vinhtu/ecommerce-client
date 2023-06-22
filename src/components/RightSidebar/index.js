import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart } from '@mui/icons-material';
import './style.css';
const RightSidebar = (props) => {
  const classes = useStyles();

  const { productTopSale } = useSelector((state) => state.product);

  return (
    <Box>
      <Box className={classes.container_right_sidebar}>
        {productTopSale &&
          productTopSale.map((item) => {
            return (
              <img src={item.thumbnail} className={classes.img_item_sidebar} />
            );
          })}
      </Box>
      <Box className={classes.horizontal_devider}></Box>
      {/* <Typography>San pham sach</Typography> */}
      {/* <Box className={classes.horizontal_devider}></Box> */}
      <Box className={classes.container_right_sidebar}>
        {productTopSale &&
          productTopSale.map((item) => {
            return (
              <img src={item.thumbnail} className={classes.img_item_sidebar} />
            );
          })}
      </Box>
    </Box>
  );
};

export default RightSidebar;
