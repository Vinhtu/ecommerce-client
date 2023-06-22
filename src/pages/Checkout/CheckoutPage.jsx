import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import { PostOrder } from '../../redux/actions/orders';
import Modal from '@mui/material/Modal';

import { GetCarts } from '../../redux/actions/carts';
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
  Radio,
} from '@mui/material';
import colors from '../../lib/colors';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import useStyles from './styles';
import { LocationOn } from '@mui/icons-material';
import ProductCartItem from '../../components/ProductCartItem';
import ProductCheckoutItem from '../../components/ProductCheckoutItem';
import { useTranslation } from 'react-i18next';
import { GetAccount, PutAccountOrder } from '../../redux/actions/accounts';
import { GetVoucher } from '../../redux/actions/vouchers';
import Paypal from './Paypal';
import ConvertVND from '../../components/ConvertMoney/ConvertVND';

var paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id:
    'AXWrwDeP7g67oqX4Chgl-73CB8eAFK9pK1zawRMyK5RpMd6Yra3kHBawX5TbbDnDI-FyK8Z-YeeyLWix',
  client_secret:
    'EL9NSA--mJjdF6PEVFwNYPdmFwHkr6G6B9mUB-4bi-YtjZ5Za06cVQpH2vg4K7ZYvcuRtykU8kCsJ2ko',
});

const CheckoutPage = (props) => {
  const classes = useStyles();

  const location = useLocation();
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  const { voucherDetail } = useSelector((state) => state.voucher);
  const { accountDetail, isPutAccount } = useSelector((state) => state.account);

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const [voucher, setVoucher] = React.useState('');
  const [applyVoucher, setApplyVoucher] = React.useState({
    status: 'pending',
    voucher: {},
  });

  const [selectedValue, setSelectedValue] = React.useState(
    'Thanh toán khi nhận hàng',
  );
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const checkout = () => {
    const data = {
      cartList,
      voucher: applyVoucher.voucher,
      typePay: selectedValue,
      statusPay: 'Chua thanh toan',
      accountId: account_id,
    };
    if (token) {
      dispatch(PostOrder(data, token));
    }
  };
  const [editAddress, setEditAddress] = React.useState(false);

  const [openModel, setOpenModel] = React.useState(false);
  const saveAddress = () => {
    setOpenModel(false);
  };

  const { t, i18n } = useTranslation();

  const [dataAccount, setDataAccount] = React.useState({
    streetAddress: accountDetail?.streetAddress,
    wardCommunedistrictAddress: accountDetail?.wardCommunedistrictAddress,
    cityAddress: accountDetail?.cityAddress,
    zipAddress: accountDetail?.zipAddress,
    cart: cartList && cartList?.data[0]._id,
  });

  const handleDataAccount = (e) => {
    setDataAccount({ ...dataAccount, [e.target.id]: e.target.value });
  };

  const putAddress = () => {
    if (token) {
      dispatch(PutAccountOrder(account_id, dataAccount, token));
    }
    setEditAddress(false);
  };
  useEffect(() => {
    if (token) {
      dispatch(GetAccount(account_id, token));
    }
  }, [isPutAccount]);

  const validateVoucher = () => {
    let dem = 0;
    for (let i = 0; i < accountDetail?.voucher.length; i += 1) {
      if (accountDetail?.voucher[i].code === voucher) {
        dem += 1;
        setApplyVoucher({
          ...applyVoucher,
          status: 'true',
          voucher: accountDetail?.voucher[i],
        });
      }
      if (i === accountDetail?.voucher.length - 1) {
        if (dem === 0) {
          setApplyVoucher('false');
        }
      }
    }
  };

  return (
    <Layout>
      {openModel && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            opacity: 1,
            alignItems: 'center',
            zIndex: 999,
          }}
        >
          <div
            style={{
              width: 600,
              height: 500,
              borderRadius: 20,
              backgroundColor: 'white',
              opacity: 1,
              padding: 16,
            }}
          >
            <div onClick={() => saveAddress()}> Save</div>
          </div>
        </div>
      )}
      <Breadcrumb breadcrumb="Cart" />
      <Box className={classes.container_cart}>
        <Box className={classes.container_left_cart}>
          {cartList &&
            cartList.data[0].cartitem.map((item) => (
              <ProductCheckoutItem data={item} />
            ))}
        </Box>
        <Box className={classes.container_right_cart}>
          <Box className={classes.head_right_cart}>
            <Typography variant="subtitle2" color="text.white">
              {t('checkout.txt_info_cart')}
            </Typography>
          </Box>
          <Box sx={{ padding: 2 }}>
            <Box className={classes.box_address_cart}>
              <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                {t('checkout.address')}
              </Typography>
              <Box className={classes.box_address}>
                <Box className={classes.box_address_ship}>
                  <LocationOn
                    sx={{ fontSize: 14, marginRight: 1, color: colors.gray }}
                  />
                  <Typography variant="body1" color="text.gray">
                    {' '}
                    {accountDetail &&
                      accountDetail.streetAddress +
                        ', ' +
                        accountDetail.wardCommunedistrictAddress +
                        ', ' +
                        accountDetail.cityAddress +
                        ', ' +
                        accountDetail.zipAddress}
                  </Typography>
                </Box>
                <Typography
                  color="primary"
                  sx={{
                    fontStyle: 'italic',
                    cursor: 'pointer',
                    width: 'fit-content',
                  }}
                  onClick={() => setEditAddress(true)}
                >
                  {t('checkout.edit')}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.horizontal_devider}></Box>
            <Box className={classes.content_total_cart}>
              <Box className={classes.box_item_total_cart}>
                <Typography variant="subtitle2">
                  {t('checkout.total_product')}
                </Typography>
                <Typography variant="subtitle2">
                  {cartList && cartList.data[0].amount}
                </Typography>
              </Box>
              <Box className={classes.box_item_total_cart}>
                <Typography variant="subtitle2" color="primary">
                  {t('checkout.vat')}
                </Typography>
                <Typography variant="subtitle2">0</Typography>
              </Box>
              <Box className={classes.box_coupon_checkout}>
                <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                  {t('checkout.voucher')}
                </Typography>
                {applyVoucher.status === 'pending' ? (
                  ''
                ) : applyVoucher.status === 'true' ? (
                  <Typography variant="overline" color="text.success">
                    Voucher giam gia: -{applyVoucher.voucher.p_price}
                  </Typography>
                ) : (
                  <Typography variant="overline" color="text.secondary">
                    Voucher khong duoc ap dung
                  </Typography>
                )}
                <Box className={classes.box_coupon}>
                  <Box className={classes.box_address_ship}>
                    <input
                      type="text"
                      id="voucher"
                      value={voucher}
                      onChange={(e) => setVoucher(e.target.value)}
                      placeholder="Nhap ma giam gia .."
                      className={classes.input_coupon}
                    />
                  </Box>
                  <Box
                    className={classes.btn_apply_coupon}
                    onClick={() => validateVoucher()}
                  >
                    {t('checkout.btn_voucher')}
                  </Box>
                </Box>
              </Box>
              <Box className={classes.box_item_total_cart}>
                <Typography variant="subtitle2">
                  {t('checkout.ship')}
                </Typography>
                <Typography variant="subtitle2">
                  {' '}
                  {cartList && ConvertVND(cartList.data[0].t_ship)}
                </Typography>
              </Box>
              <Box className={classes.box_item_total_cart}>
                <Typography variant="subtitle2">Tong don hang</Typography>
                <Typography variant="subtitle2">
                  {ConvertVND(cartList.data[0]?.t_price)}
                </Typography>
              </Box>
              <Box className={classes.box_item_total_cart}>
                <Typography variant="subtitle2">Tien duoc giam</Typography>
                <Typography variant="subtitle2">
                  {applyVoucher.status === 'true'
                    ? applyVoucher.voucher.p_price
                    : 0}
                </Typography>
              </Box>
              <Box className={classes.box_item_total_cart}>
                <Typography variant="subtitle2">
                  {t('checkout.total_price')}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {/* {cartList &&
                  parseInt(cartList.data[0].t_price) - applyVoucher.status ==
                    'true'
                    ? 
                    parseInt(applyVoucher.voucher.p_price)
                    : 0} */}
                  {applyVoucher.status === 'true'
                    ? parseInt(cartList.data[0].t_price) +
                      parseInt(cartList.data[0].t_ship) -
                      parseInt(applyVoucher.voucher.p_price)
                    : parseInt(cartList.data[0].t_price) +
                      parseInt(cartList.data[0].t_ship)}
                </Typography>
              </Box>
              <Box className={classes.type_pay}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 'bold', marginBottom: 2 }}
                >
                  {t('checkout.title_pay')}
                </Typography>
                <Box className={classes.box_radio_type_pay}>
                  <Typography variant="body1">
                    {t('checkout.pay_ship')}
                  </Typography>
                  <Radio
                    {...controlProps('Thanh toán khi nhận hàng')}
                    size="20px"
                    sx={{
                      color: colors.gray,
                      '&.Mui-checked': {
                        color: colors.primary,
                      },
                    }}
                  />
                </Box>
                <Box className={classes.box_radio_type_pay}>
                  <Typography variant="body1">
                    {t('checkout.pay_momo')}
                  </Typography>
                  <Radio
                    {...controlProps('Thanh toán qua momo')}
                    size="20px"
                    sx={{
                      color: colors.gray,
                      '&.Mui-checked': {
                        color: colors.primary,
                      },
                    }}
                  />
                </Box>
                <Box className={classes.box_radio_type_pay}>
                  <Typography variant="body1">
                    {' '}
                    {t('checkout.pay_card')}
                  </Typography>
                  <Radio
                    {...controlProps('Thanh toán qua ngân hàng')}
                    size="20px"
                    sx={{
                      color: colors.gray,
                      '&.Mui-checked': {
                        color: colors.primary,
                      },
                    }}
                  />
                </Box>
                <Box className={classes.box_radio_type_pay}>
                  <Typography variant="body1">
                    {' '}
                    {t('checkout.pay_paypal')}
                  </Typography>
                  <Radio
                    {...controlProps('Thanh toán qua paypal')}
                    size="20px"
                    sx={{
                      color: colors.gray,
                      '&.Mui-checked': {
                        color: colors.primary,
                      },
                    }}
                  />
                </Box>
                {/* <Box>
                  <Paypal />
                </Box> */}
              </Box>
            </Box>

            <Box className={classes.btn_total_cart} onClick={() => checkout()}>
              {/* <Typography variant="subtitle1" color="text.white"> */}
              {t('checkout.btn_checkout')}
              {/* </Typography> */}
            </Box>
          </Box>
        </Box>
      </Box>
      <Modal
        open={editAddress}
        onClose={() => setEditAddress(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.model_edit_address}>
          <Typography
            id="modal-modal-title"
            variant="subtitle2"
            component="h3"
            sx={{ marginBottom: 2 }}
          >
            Edit Address
          </Typography>
          <Box sx={{ marginRight: 2 }}>
            <Box sx={{ display: 'flex' }}>
              <input
                type="text"
                id="streetAddress"
                value={dataAccount.streetAddress}
                onChange={handleDataAccount}
                className={classes.input_edit_info_account_address}
              />
              <input
                type="text"
                id="wardCommunedistrictAddress"
                value={dataAccount.wardCommunedistrictAddress}
                onChange={handleDataAccount}
                className={classes.input_edit_info_account_address}
              />
              <input
                type="text"
                id="cityAddress"
                value={dataAccount.cityAddress}
                onChange={handleDataAccount}
                className={classes.input_edit_info_account_address}
              />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <input
                type="text"
                id="zipAddress"
                value={dataAccount.zipAddress}
                onChange={handleDataAccount}
                className={classes.input_edit_info_account_address}
              />
            </Box>
          </Box>
          <Box className={classes.box_btn}>
            <Box
              className={classes.btn_cancle}
              onClick={() => setEditAddress(false)}
            >
              {t('account.cancel')}
            </Box>
            <Box className={classes.btn_save} onClick={() => putAddress()}>
              {' '}
              {t('account.edit')}
            </Box>
          </Box>
        </Box>
      </Modal>
    </Layout>
  );
};

export default CheckoutPage;
