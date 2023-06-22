import React, { useState, useEffect, useRef } from 'react';

import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  RemoveRedEyeOutlined,
  StarOutlined,
  FavoriteBorderOutlined,
  ScaleOutlined,
  AddShoppingCart,
} from '@mui/icons-material';
import colors from '../../lib/colors';

const ItemTime = (props) => {
  const classes = useStyles();

  return (
    <Box mr={1}>
      <Box className={classes.box_item_time}>
        {/* <Typography className={classes.txt_item_time} sx={{ fontSize: 24 }}>
          {props.time}
        </Typography> */}
        <img
          src={props?.data?.thumbnail}
          style={{ width: 80, height: 80, borderRadius: 16 }}
        />
        {/* {props.icon === 'AddShoppingCart' && (
          <AddShoppingCart
            sx={{ fontSize: 24, color: colors.darkGray2 }}
            className="icon_eye"
          />
        )}

        {props.icon === 'FavoriteBorderOutlined' && (
          <FavoriteBorderOutlined
            sx={{ fontSize: 24, color: colors.darkGray2 }}
            className="icon_eye"
          />
        )}

        {props.icon === 'ScaleOutlined' && (
          <ScaleOutlined
            sx={{ fontSize: 24, color: colors.darkGray2 }}
            className="icon_eye"
          />
        )} */}
      </Box>
      {/* <Typography
        variant="subtitle2"
        className={classes.txt_time}
        sx={{ marginTop: 0.5 }}
      >
        {props.type}
      </Typography> */}
    </Box>
  );
};

export default ItemTime;
