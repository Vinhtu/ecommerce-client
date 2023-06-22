import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart } from '@mui/icons-material';
import './style.css';
const ItemDescriptionProduct = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();

  return (
    <Box className={classes.container_item_description_product}>
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="subtitle2">
          {props.data && props.data.body}
        </Typography>
      </Box>
      <Box>
        <img
          src={props.data && props.data.thumbnail}
          className={classes.img_description_product}
        />
      </Box>
    </Box>
  );
};

export default ItemDescriptionProduct;
