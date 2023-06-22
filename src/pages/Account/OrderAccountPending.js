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
import userEvent from '@testing-library/user-event';
import {
  GetOrder,
  GetOrderAccount,
  PutCancelOrder,
} from '../../redux/actions/orders';
import ProductCheckoutItem from '../../components/ProductCheckoutItem';
import colors from '../../lib/colors';
import ConvertVND from '../../components/ConvertMoney/ConvertVND';
const OrderAccountPending = (props) => {
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

  const deleteOrderItem = (id) => {
    dispatch(PutCancelOrder(id));
  };
  return (
    <Layout>
      <Breadcrumb breadcrumb="Login/Register" />
      <Box className={classes.container_account}>
        <LayoutAccount breadcrumb="OrderPending">
          {orderDetail &&
            orderDetail.map((item) => {
              if (item.status === 'Pending') {
                return (
                  <Box sx={{ marginBottom: 2 }}>
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
                      return (
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <Box
                            sx={{ cursor: 'pointer' }}
                            onClick={() => deleteOrderItem(orderItem._id)}
                          >
                            <Typography color="text.secondary">Huy</Typography>
                          </Box>
                          <Box sx={{ width: '95%' }}>
                            <ProductCheckoutItem data={orderItem} account />
                          </Box>
                        </Box>
                      );
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

export default OrderAccountPending;
