import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../lib/colors';
import Slider from 'react-slick';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { GetVoucher, GetVoucherDate } from '../../redux/actions/vouchers';
import { PutAccountGiveVoucher } from '../../redux/actions/accounts';
import { GetBanners } from '../../redux/actions/banners';
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  RemoveRedEyeOutlined,
  StarOutlined,
  FavoriteBorderOutlined,
  ScaleOutlined,
  AddShoppingCart,
} from '@mui/icons-material';
import classNames from 'classnames';
const ItemFlashare = (props) => {
  const { data } = props;
  const classes = useStyles();

  const navigate = useNavigate();
  const ToProduct = () => {
    navigate(`/product-detail/${data?.product?.name}`, {
      state: { data: data.product, id: data?.product?._id },
    });
  };

  return (
    <Box className={classes.container_item_feature}>
      <Box className={classes.left_item_dealday}>
        <Box>
          <img src={data?.product?.thumbnail} className={classes.img_item} />
          <Box className={classes.percent_item}>
            <Typography variant="body1" color="text.white">
              30%
            </Typography>
          </Box>
          <Box className={classNames(classes.bx_btn, 'bx_btn')}>
            <Box className={classes.eye_item}>
              <FavoriteBorderOutlined
                sx={{ fontSize: 24, color: colors.darkGray2 }}
                className="icon_eye"
              />
            </Box>
            <Box className={classes.eye_item}>
              <RemoveRedEyeOutlined
                sx={{ fontSize: 24, color: colors.darkGray2 }}
                className="icon_eye"
              />
            </Box>
            <Box className={classes.eye_item}>
              <ScaleOutlined
                sx={{ fontSize: 24, color: colors.darkGray2 }}
                className="icon_eye"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.right_item_dealday}>
        <Typography
          variant="subtitle2"
          className={classes.txt_category}
          sx={{ marginBottom: 1 }}
        >
          {data?.product?.brand}
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.txt_title_product}
          sx={{ marginBottom: 0.5, height: '54.5px', overflow: 'hidden' }}
          onClick={() => ToProduct()}
        >
          {data?.product?.name}-{data?.product?.name}
        </Typography>
        <Box className={classes.bx_star_rate}>
          {Array(5)
            .fill(1)
            .map((item) => {
              return (
                <StarOutlined
                  sx={{ fontSize: 14 }}
                  className={classes.icon_star}
                />
              );
            })}
        </Box>
        <Box className={classes.box_price}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ marginRight: 0.5 }}
          >
            {data?.product?.color[0]?.size[0]?.price}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.primary"
            sx={{ textDecorationLine: 'line-through' }}
          >
            {data?.product?.color[0]?.size[0]?.p_price}
          </Typography>
        </Box>
        <Box className={classes.btn_add_to_cart}>
          <AddShoppingCart
            sx={{ fontSize: 20, color: colors.darkGray2 }}
            className="icon_eye"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ItemFlashare;
