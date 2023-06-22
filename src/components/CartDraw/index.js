import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import useStyles from './styles';
import colors from '../../lib/colors';
import './style.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import ButtonTheme from '../ButtonTheme';
import { DeleteForeverOutlined } from '@mui/icons-material/';
import { GetCartAccount } from '../../redux/actions/carts';
import { Navigate } from 'react-router-dom';
import { DeleteCartItem } from '../../redux/actions/cartitems';
const CartDraw = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isPostCart } = useSelector((state) => state.cart);
  const { isPutCart } = useSelector((state) => state.cart);
  const { cartList } = useSelector((state) => state.cart);
  const { isDeleteCartItem } = useSelector((state) => state.cartitem);

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [dispatch, isPostCart, isPutCart, account_id, token]);
  const { t, i18n } = useTranslation();

  const deleteCartItem = (item) => {
    dispatch(DeleteCartItem(item, cartList.data[0]._id));
  };

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [isDeleteCartItem]);

  return (
    <Box className={classes.container_cart_draw}>
      <Box py={2} className={classes.box_title_cart}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 'bold' }}
          className={classes.txt_title_cart}
        >
          Your cart
        </Typography>
      </Box>
      {cartList ? (
        cartList.data[0] && cartList.data[0].cartitem.length > 0 ? (
          <>
            {cartList.data[0].cartitem.map((item, idx) => {
              return (
                <Box className={classes.item_product}>
                  <Box
                    px={1.25}
                    py={1.5}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box display="flex" alignItems="center">
                      <img
                        src={item.product?.thumbnail}
                        className={classes.img_cart_item}
                      />
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: colors.darkGray }}
                        >
                          {item.product?.name}
                        </Typography>
                        <Box display="flex">
                          <Typography
                            variant="subtitle2"
                            sx={{ color: colors.black, marginRight: 0.5 }}
                          >
                            Color:
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{ color: colors.darkGray }}
                          >
                            {item.color}
                          </Typography>
                        </Box>
                        <Box mb={0.5} display="flex">
                          <Typography
                            variant="subtitle2"
                            sx={{ color: colors.black, marginRight: 0.5 }}
                          >
                            Size:
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{ color: colors.darkGray }}
                          >
                            {item.size}
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <Typography
                            variant="subtitle2"
                            sx={{ color: colors.darkGray, marginRight: 0.5 }}
                          >
                            {item.amount}x
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: colors.orange }}
                          >
                            {parseInt(item.price) * parseInt(item.amount)}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <DeleteForeverOutlined
                        sx={{ fontSize: 24, cursor: 'pointer' }}
                        onClick={() => deleteCartItem(item._id)}
                      />
                    </Box>
                  </Box>
                </Box>
              );
            })}

            <Box className={classes.bx_total}>
              <Box mb={2} className={classes.bx_total_amount}>
                <Typography
                  variant="subtitle2"
                  sx={{ color: '#0c5460', textAlign: 'center' }}
                >
                  There is {cartList.data[0].cartitem.length} item in your cart.
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: colors.black,
                    marginRight: 0.5,
                    fontWeight: 'bold',
                  }}
                >
                  Subtotal
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ color: colors.orange, fontWeight: 'bold' }}
                >
                  {cartList.data[0].t_price}
                </Typography>
              </Box>
            </Box>
            <Box py={3} px={1.25}>
              <Box pb={2}>
                <ButtonTheme
                  text="Cart"
                  height="40px"
                  fontWeight="bold"
                  bgColor={colors.darkGray5}
                  bgColorHover={colors.black}
                  labelColor="#adadad"
                  onClick={() => navigate('/cart')}
                />
              </Box>
              <Box>
                <ButtonTheme
                  text="Checkout"
                  bgColor="red"
                  height="40px"
                  fontWeight="bold"
                  bgColorHover={colors.orange}
                  labelColor={colors.white}
                  onClick={() => navigate('/checkout-new')}
                />
              </Box>
            </Box>
          </>
        ) : (
          <Typography
            variant="subtitle2"
            sx={{ marginTop: 2, textAlign: 'center' }}
          >
            {t('middel_header.no_cart')}
          </Typography>
        )
      ) : (
        <Typography
          variant="subtitle2"
          sx={{ marginTop: 2, textAlign: 'center' }}
        >
          {t('middel_header.no_cart')}
        </Typography>
      )}
    </Box>
  );
};

export default CartDraw;
