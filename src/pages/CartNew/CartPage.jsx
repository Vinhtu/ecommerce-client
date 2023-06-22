import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import ProductCartItem from '../../components/ProductCartItem';
import Breadcrumb from '../../components/Breadcrumb';
import { GetCartAccount, GetCarts } from '../../redux/actions/carts';
import { useNavigate } from 'react-router-dom';
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
import colors from '../../lib/colors';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import './style.css';
import useStyles from './styles';
import { LocationOn, DeleteForeverOutlined } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import ConvertVND from '../../components/ConvertMoney/ConvertVND';
import ButtonTheme from '../../components/ButtonTheme';
import {
  DeleteCartItem,
  PutChangeAmountCartItem,
} from '../../redux/actions/cartitems';
const CartNew = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openModel, setOpenModel] = React.useState(false);
  const { cartList } = useSelector((state) => state.cart);
  const { accountDetail } = useSelector((state) => state.account);
  const { isPostCartItem } = useSelector((state) => state.cartitem);
  const { isPutCartItem } = useSelector((state) => state.cartitem);
  const { isDeleteCartItem } = useSelector((state) => state.cartitem);

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const [selectVoucher, setSelectVoucher] = React.useState();

  // useEffect(() => {
  //   dispatch(Get());
  // }, [dispatch]);

  const handleCheckout = () => {
    if (accountDetail != null) {
      if (accountDetail.streetAddress != null) {
        navigate('/checkout', {
          state: { accountDetail, voucher: selectVoucher, cartList },
        });
      } else {
        setOpenModel(true);
      }
    }
  };
  const saveAddress = () => {
    setOpenModel(false);
  };

  const setSelect = (item) => {
    setSelectVoucher(item);
  };

  const myFunction = () => {
    var x = document.getElementById('mySelect').value;
    setSelectVoucher(x);
  };

  const toCheckout = () => {
    navigate('/checkout');
  };
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [isPostCartItem]);

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [isPutCartItem]);

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [isDeleteCartItem]);

  console.log(cartList, 'cartList');

  return (
    <Layout>
      <Breadcrumb sub="Home" sub1="Cart" />
      <Box py={3} className={classes.container_cart}>
        <Box className={classes.bx_left_cart}>
          <table className={classes.table_cart}>
            <thead>
              <tr className={classes.tr_table_cart}>
                <th className={classes.th_product}>
                  {' '}
                  <Typography variant="h2" sx={{ fontWeight: 600 }}>
                    Shopping cart
                  </Typography>
                </th>
                <th className={classes.th_filter}></th>
                <th className={classes.th_filter}></th>
                <th className={classes.th_filter}></th>
                <th className={classes.th_filter}></th>
              </tr>
            </thead>
            <tbody className={classes.table_body}>
              {cartList &&
                cartList.data[0]?.cartitem?.length >= 0 &&
                cartList.data[0].cartitem.map((item) => {
                  return <ProductCartItem data={item} />;
                })}
            </tbody>
          </table>
        </Box>
        <Box className={classes.bx_right_cart}>
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 'bold',
              color: colors.black,
              marginBottom: 2,
            }}
          >
            CART TOTALS
          </Typography>
          <Box className={classes.horizontal_devider}></Box>
          <Box py={3}>
            <Box
              mb={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h3">Amount</Typography>
              <Typography variant="subtitle1" sx={{ color: colors.darkGray }}>
                {cartList && cartList.data[0]?.amount}
              </Typography>
            </Box>
            <Box
              mb={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h3">Total</Typography>
              <Typography variant="subtitle3" sx={{ color: colors.black }}>
                {cartList && cartList.data[0]?.t_price}
              </Typography>
            </Box>
            <Box mt={4}>
              <ButtonTheme
                text="To checkout"
                onClick={() => navigate('/checkout-new')}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default CartNew;
