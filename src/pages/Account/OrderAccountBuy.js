import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import { Register } from '../../redux/actions/accounts';

import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Checkbox,
  FormControlLabel,
  Slider,
  TextField,
  MenuItem,
  Pagination,
} from '@mui/material';
import useStyles from './styles';
import LayoutAccount from '../../components/LayoutAccount';
import { GetOrderAccount } from '../../redux/actions/orders';
import ProductCheckoutItem from '../../components/ProductCheckoutItem';
import ConvertVND from '../../components/ConvertMoney/ConvertVND';
const OrderAccountBuy = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const { orderDetail } = useSelector((state) => state.order);

  useEffect(() => {
    if (token) {
      dispatch(GetOrderAccount(account_id, token));
    }
  }, [dispatch]);

  return (
    <Layout>
      <Breadcrumb breadcrumb="Login/Register" />
      <Box className={classes.container_account}>
        <LayoutAccount breadcrumb="OrderBuy">
          {' '}
          {orderDetail &&
            orderDetail.map((item) => {
              if (item.status === 'Complete') {
                return (
                  <Box>
                    <Typography sx={{ marginBottom: 0.5 }}>
                      Don hang: {item.create_date}
                    </Typography>
                    <Typography sx={{ marginBottom: 0.5 }}>
                      Tong tien: {item.t_price}
                    </Typography>
                    <Typography sx={{ marginBottom: 0.5 }}>
                      Hinh thuc thanh toan: {item.type_pay}
                    </Typography>
                    {item.orderitem.map((orderItem) => {
                      return <ProductCheckoutItem data={orderItem} account />;
                    })}
                  </Box>
                );
              }
            })}
        </LayoutAccount>
      </Box>
    </Layout>
  );
};

export default OrderAccountBuy;
