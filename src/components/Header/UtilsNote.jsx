import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';

import useStyles from './styles';

const UtilsNote = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { isPostCart } = useSelector((state) => state.cart);
  const { isPutCart } = useSelector((state) => state.cart);
  const { isPutComment } = useSelector((state) => state.comment);
  const { isPostOrder } = useSelector((state) => state.order);
  const { isPutVoucherAccount } = useSelector((state) => state.account);
  const { note } = useSelector((state) => state.utils);

  const { accountDetail } = useSelector((state) => state.account);
  const { categoryList } = useSelector((state) => state.category);
  const { notificationList } = useSelector((state) => state.notification);
  const { cartList } = useSelector((state) => state.cart);

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  return (
    <Box>
      {props.note?.type === 'isPutVoucherAccount' &&
        (isPutVoucherAccount === 'success' ? (
          <Typography variant="body1" color="text.success">
            Them voucher thanh cong
          </Typography>
        ) : isPutVoucherAccount === 'fail' ? (
          <Typography variant="body1" color="text.secondary">
            Them voucher that bai
          </Typography>
        ) : null)}

      {props.note?.type === 'isPostCart' &&
        (isPostCart === 'success' ? (
          <Typography variant="body1" color="text.success">
            Them cart thanh cong
          </Typography>
        ) : isPostCart === 'fail' ? (
          <Typography variant="body1" color="text.secondary">
            Them cart that bai
          </Typography>
        ) : null)}
      {props.note?.type === 'isPostOrder' &&
        (isPostOrder === 'success' ? (
          <Typography variant="body1" color="text.success">
            Dat hang thanh cong
          </Typography>
        ) : isPostOrder === 'fail' ? (
          <Typography variant="body1" color="text.secondary">
            Dat hang that bai
          </Typography>
        ) : null)}
    </Box>
  );
};

export default UtilsNote;
