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
  Select,
  styled,
} from '@mui/material';
import colors from '../../lib/colors';
import AsyncSelect from 'react-select/async';
import useStyles from './styles';
import {
  LocationOn,
  KeyboardArrowUp,
  StarOutlined,
  KeyboardArrowDown,
} from '@mui/icons-material';
import ProductCartItem from '../../components/ProductCartItem';
import ProductCheckoutItem from '../../components/ProductCheckoutItem';
import { useTranslation } from 'react-i18next';
import { GetAccount, PutAccountOrder } from '../../redux/actions/accounts';
import { GetVoucher } from '../../redux/actions/vouchers';
import Paypal from './Paypal';
import ConvertVND from '../../components/ConvertMoney/ConvertVND';
import ButtonTheme from '../../components/ButtonTheme';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {
  GetDistricts,
  GetProvinces,
  GetWards,
} from '../../redux/actions/utils';
import NativeSelect from '@mui/material/NativeSelect';

var paypal = require('paypal-rest-sdk');

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 0,
    // height: '42px !important',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 0,
      borderColor: '#D70018',
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

paypal.configure({
  mode: 'sandbox', //sandbox or live
  client_id:
    'AXWrwDeP7g67oqX4Chgl-73CB8eAFK9pK1zawRMyK5RpMd6Yra3kHBawX5TbbDnDI-FyK8Z-YeeyLWix',
  client_secret:
    'EL9NSA--mJjdF6PEVFwNYPdmFwHkr6G6B9mUB-4bi-YtjZ5Za06cVQpH2vg4K7ZYvcuRtykU8kCsJ2ko',
});

const CheckoutPageNew = (props) => {
  const classes = useStyles();
  const tokenGHN = '90ce8fc1-612b-11ed-b824-262f869eb1a7';

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { provinceList, districtList, wardList } = useSelector(
    (state) => state.utils,
  );

  useEffect(() => {
    dispatch(GetProvinces(tokenGHN));
  }, [dispatch]);
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

  // const checkout = () => {
  //   const data = {
  //     cartList,
  //     voucher: applyVoucher.voucher,
  //     typePay: selectedValue,
  //     statusPay: 'Chua thanh toan',
  //     accountId: account_id,
  //   };
  //   if (token) {
  //     dispatch(PostOrder(data, token));
  //   }
  // };
  const [editAddress, setEditAddress] = React.useState(false);

  const [openModel, setOpenModel] = React.useState(false);
  const saveAddress = () => {
    setOpenModel(false);
  };

  const { t, i18n } = useTranslation();

  const [dataAccount, setDataAccount] = React.useState({
    fullname: '',
    username: '',
    phone: '',
    province: '',
    district: '',
    ward: '',
    zip: '',
    line: '',
    cart: '',
  });

  useEffect(() => {
    if (accountDetail) {
      setDataAccount({
        ...dataAccount,

        fullname: accountDetail?.fullname,
        username: accountDetail?.username,
        phone: accountDetail?.phone,
        province: accountDetail?.province,
        district: accountDetail?.district,
        ward: accountDetail?.ward,
        line: accountDetail?.line,
        zip: accountDetail?.zip,
        cart: cartList?.data[0]?._id,
      });
    }
  }, [accountDetail]);

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

  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [expanded, setExpanded] = React.useState(true);

  const handleChangePay = (event) => {
    setSelectedValue(event.target.value);
  };

  const selectProvince = (provinceId) => {
    dispatch(GetDistricts(tokenGHN, provinceId));
  };
  const selectDistrict = (districtId) => {
    dispatch(GetWards(tokenGHN, districtId));
  };

  const checkout = () => {
    const data = {
      cartList,
      voucher: applyVoucher.voucher,
      typePay: selectedValue,
      statusPay: 'Chua thanh toan',
      accountId: account_id,
      currency: 'VND',
      totalPrice:
        applyVoucher.status === 'true'
          ? parseInt(cartList.data[0].t_price) +
            parseInt(cartList.data[0].t_ship) -
            parseInt(applyVoucher.voucher.p_price)
          : parseInt(cartList.data[0].t_price) +
            parseInt(cartList.data[0].t_ship),
    };
    if (selectedValue === 'Thanh toán qua paypal') {
      // const navigate = useNavigate();
      navigate('/paypal', { state: data });
    } else if (selectedValue == 'Thanh toán khi nhận hàng') {
      if (token) {
        dispatch(PostOrder(data, token));
      }
    }
  };

  return (
    <Layout>
      <Box className={classes.container_checkout}>
        <Box className={classes.bx_left_cart}>
          <Accordion
            expanded={expanded}
            onChange={() => setExpanded(!expanded)}
            sx={{ boxShadow: 0, borderTop: 0 }}
            className={classes.accordion_container}
          >
            <AccordionSummary
              sx={{
                padding: 0,
                border: 0,
                boxShadow: 'none',
                marginTop: 0,
                // borderBottom: `1px solid ${colors.darkGray2}`,
              }}
              // expandIcon={
              //   <ExpandMoreIcon sx={{ fontSize: 16, fontWeight: 'bold' }} />
              // }
              className={classes.accordion_item}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box className={classes.bx_number_accordion}>
                <Typography variant="h3">1</Typography>
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  marginTop: 0,
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Person Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '40px 11px 0px 11px' }}>
              <Box
                // display="flex"
                // justifyContent="space-between"
                // alignItems="center"
                mb={3}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    color: colors.black,
                    marginLeft: 1.25,
                    marginBottom: 1.5,
                  }}
                >
                  Full Name{' '}
                  <span style={{ color: colors.orange, fontSize: 18 }}>*</span>
                </Typography>
                <input
                  id="fullname"
                  type="text"
                  value={dataAccount.fullname}
                  className={classes.input_checkout}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    marginTop: 1,
                    color: colors.darkGray,
                  }}
                >
                  Only letters and the dot (.) character, followed by a space,
                  are allowed.
                </Typography>
              </Box>

              <Box
                // display="flex"
                // justifyContent="space-between"
                // alignItems="center"
                mb={3}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    color: colors.black,
                    marginLeft: 1.25,
                    marginBottom: 1.5,
                  }}
                >
                  Username{' '}
                  <span style={{ color: colors.orange, fontSize: 18 }}>*</span>
                </Typography>
                <input
                  id="username"
                  type="email"
                  disabled
                  value={dataAccount.username}
                  className={classes.input_checkout}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    marginTop: 1,
                    color: colors.darkGray,
                  }}
                >
                  Only letters and the dot (.) character, followed by a space,
                  are allowed.
                </Typography>
              </Box>

              <Box
                // display="flex"
                // justifyContent="space-between"
                // alignItems="center"
                mb={3}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    color: colors.black,
                    marginLeft: 1.25,
                    marginBottom: 1.5,
                  }}
                >
                  Phone{' '}
                  <span style={{ color: colors.orange, fontSize: 18 }}>*</span>
                </Typography>
                <input
                  id="phone"
                  type="number"
                  value={dataAccount.phone}
                  className={classes.input_checkout}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    marginTop: 1,
                    color: colors.darkGray,
                  }}
                >
                  Only number character
                </Typography>
              </Box>
              <Box mt={4} mb={2}>
                <ButtonTheme text="Accept" />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{ boxShadow: 0, borderTop: 0, marginTop: 3 }}
            className={classes.accordion_container}
          >
            <AccordionSummary
              sx={{
                padding: 0,
                border: 0,
                boxShadow: 'none',
                marginTop: 0,
                // borderBottom: `1px solid ${colors.darkGray2}`,
              }}
              // expandIcon={
              //   <ExpandMoreIcon sx={{ fontSize: 16, fontWeight: 'bold' }} />
              // }
              className={classes.accordion_item}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box className={classes.bx_number_accordion}>
                <Typography variant="h3">2</Typography>
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  marginTop: 0,
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Address
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '40px 11px 0px 11px' }}>
              <Box mb={3}>
                <Typography
                  sx={{
                    fontSize: 16,
                    color: colors.black,
                    marginLeft: 1.25,
                    marginBottom: 1.5,
                  }}
                >
                  City/Province{' '}
                  <span style={{ color: colors.orange, fontSize: 18 }}>*</span>
                </Typography>
                <FormControl id="province" sx={{ m: 0, width: '100%' }}>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    name="province"
                    input={<BootstrapInput />}
                    value={dataAccount.province}
                    // onChange={(e) =>
                    //   setDataAccount({
                    //     ...dataAccount,
                    //     province: e.target.value,
                    //   })
                    // }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {provinceList?.data?.map((item) => {
                      return (
                        <MenuItem
                          value={item.ProvinceName}
                          onClick={() => selectProvince(item.ProvinceID)}
                        >
                          {item.ProvinceName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>

              <Box mb={3}>
                <Typography
                  sx={{
                    fontSize: 16,
                    color: colors.black,
                    marginLeft: 1.25,
                    marginBottom: 1.5,
                  }}
                >
                  District{' '}
                  <span style={{ color: colors.orange, fontSize: 18 }}>*</span>
                </Typography>
                <FormControl id="district" sx={{ m: 0, width: '100%' }}>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    name="district"
                    value={dataAccount.district}
                    // onChange={(e) =>
                    //   setDataAccount({
                    //     ...dataAccount,
                    //     district: e.target.value,
                    //   })
                    // }
                    input={<BootstrapInput />}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {districtList?.data?.map((item) => {
                      return (
                        <MenuItem
                          value={item.DistrictName}
                          onClick={() => selectDistrict(item.DistrictID)}
                        >
                          {item.DistrictName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>

              <Box mb={3}>
                <Typography
                  sx={{
                    fontSize: 16,
                    color: colors.black,
                    marginLeft: 1.25,
                    marginBottom: 1.5,
                  }}
                >
                  Ward{' '}
                  <span style={{ color: colors.orange, fontSize: 18 }}>*</span>
                </Typography>
                <FormControl id="ward" sx={{ m: 0, width: '100%' }}>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    name="ward"
                    // defaultValue=""
                    input={<BootstrapInput />}
                    value={`${dataAccount.ward}`}
                    // onChange={(e) =>
                    //   setDataAccount({
                    //     ...dataAccount,
                    //     ward: e.target.value,
                    //   })
                    // }
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {wardList?.data?.map((item) => {
                      return (
                        <MenuItem value={item.WardName}>
                          {item.WardName}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>

              <Box
                // display="flex"
                // justifyContent="space-between"
                // alignItems="center"
                mb={3}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    color: colors.black,
                    marginLeft: 1.25,
                    marginBottom: 1.5,
                  }}
                >
                  Number House / Line Address{' '}
                  <span style={{ color: colors.orange, fontSize: 18 }}>*</span>
                </Typography>
                <input
                  id="line"
                  type="text"
                  value={dataAccount.line}
                  className={classes.input_checkout}
                />
                <Typography
                  variant="subtitle2"
                  sx={{
                    marginTop: 1,
                    color: colors.darkGray,
                  }}
                >
                  Please enter exactly all information
                </Typography>
              </Box>
              <Box mt={4} mb={2}>
                <ButtonTheme text="Accept" />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{ boxShadow: 0, borderTop: 0, marginTop: 3 }}
            className={classes.accordion_container}
          >
            <AccordionSummary
              sx={{
                padding: 0,
                border: 0,
                boxShadow: 'none',
                marginTop: 0,
                // borderBottom: `1px solid ${colors.darkGray2}`,
              }}
              // expandIcon={
              //   <ExpandMoreIcon sx={{ fontSize: 16, fontWeight: 'bold' }} />
              // }
              className={classes.accordion_item}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box className={classes.bx_number_accordion}>
                <Typography variant="h3">3</Typography>
              </Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  marginTop: 0,
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Payment Method
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '40px 0px 0px 0px' }}>
              <Box mb={3}>
                <Box mb={3} className={classes.box_radio_type_pay}>
                  <Radio
                    {...controlProps('Thanh toán khi nhận hàng')}
                    sx={{
                      color: colors.orange,
                      '&.Mui-checked': {
                        color: colors.orange,
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: 20,
                      },
                    }}
                  />
                  <Typography sx={{ fontSize: 14 }}>
                    Thanh toán khi nhận hàng
                  </Typography>
                </Box>
                <Box mb={3} className={classes.box_radio_type_pay}>
                  <Radio
                    {...controlProps('Thanh toán qua momo')}
                    sx={{
                      color: colors.orange,
                      '&.Mui-checked': {
                        color: colors.orange,
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: 20,
                      },
                    }}
                  />
                  <Typography sx={{ fontSize: 14 }}>
                    Thanh toán qua Momo
                  </Typography>
                </Box>

                <Box mb={3} className={classes.box_radio_type_pay}>
                  <Radio
                    {...controlProps('Thanh toán qua paypal')}
                    sx={{
                      color: colors.orange,
                      '&.Mui-checked': {
                        color: colors.orange,
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: 20,
                      },
                    }}
                  />
                  <Typography sx={{ fontSize: 14 }}>
                    {' '}
                    Thanh toán qua Paypal
                  </Typography>
                </Box>
              </Box>

              <Box mt={4} mb={2}>
                {/* <ButtonTheme text="Continue" /> */}
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box className={classes.bx_right_cart}>
          <Typography
            sx={{
              color: colors.black,
              marginBottom: 2,
            }}
            variant="subtitle2"
          >
            {cartList?.data[0].amount} San pham
          </Typography>

          <Accordion
            sx={{ boxShadow: 0, borderTop: 0, marginTop: 3 }}
            className={classes.accordion_container_product}
          >
            <AccordionSummary
              sx={{
                padding: 0,
                border: 0,
                boxShadow: 'none',
                marginTop: 0,
                // borderBottom: `1px solid ${colors.darkGray2}`,
              }}
              // expandIcon={
              //   <ExpandMoreIcon sx={{ fontSize: 16, fontWeight: 'bold' }} />
              // }
              className={classes.accordion_item_product}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 'bold',
                  marginTop: 0,
                  marginRight: 1,
                  // textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Product Detail
              </Typography>
              <KeyboardArrowDown sx={{ marginTop: 0.5, fontSize: 16 }} />
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '16px 0px 0px 0px' }}>
              <Box mb={3}>
                {cartList &&
                  cartList.data[0].cartitem.map((item) => (
                    <Box mb={2} className={classes.bx_item_cart}>
                      <Box display="flex" alignItems="center">
                        <img
                          className={classes.img_item_cart}
                          src={item?.product?.thumbnail}
                        />
                        <Box mr={1.25} sx={{ width: 150 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{ marginRight: 1.25 }}
                          >
                            Ship: <span sx={{ fontSize: 16 }}>{item.ship}</span>
                          </Typography>

                          <Typography
                            variant="subtitle2"
                            sx={{ height: '23px', overflow: 'hidden' }}
                          >
                            {item?.product?.name}
                          </Typography>
                        </Box>
                        <Typography variant="subtitle2" sx={{ marginRight: 1 }}>
                          X{item?.amount}
                        </Typography>
                      </Box>

                      <Typography variant="subtitle1">{item?.price}</Typography>
                    </Box>
                  ))}
              </Box>

              <Box mt={4} mb={2}>
                {/* <ButtonTheme text="Continue" /> */}
              </Box>
            </AccordionDetails>
          </Accordion>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                color: colors.black,
                marginBottom: 1,
                fontWeight: 'bold',
              }}
              variant="subtitle1"
            >
              Subtotal
            </Typography>
            <Typography
              sx={{
                color: colors.darkGray,
                marginBottom: 1,
              }}
              variant="subtitle1"
            >
              {cartList?.data[0]?.t_price}
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                color: colors.black,
                marginBottom: 1,
                fontWeight: 'bold',
              }}
              variant="subtitle1"
            >
              Shipping
            </Typography>
            <Typography
              sx={{
                color: colors.darkGray,
                marginBottom: 1,
              }}
              variant="subtitle1"
            >
              {cartList?.data[0]?.t_ship}
            </Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                color: colors.black,
                marginBottom: 1,
                fontWeight: 'bold',
              }}
              variant="subtitle1"
            >
              VAT
            </Typography>
            <Typography
              sx={{
                color: colors.darkGray,
                marginBottom: 1,
              }}
              variant="subtitle1"
            >
              0
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                color: colors.black,
                marginBottom: 1,
                fontWeight: 'bold',
              }}
              variant="subtitle1"
            >
              Voucher
            </Typography>
            <Typography
              sx={{
                color: colors.darkGray,
                marginBottom: 1,
              }}
              variant="subtitle1"
            >
              {applyVoucher.status === 'true'
                ? applyVoucher.voucher.p_price
                : 0}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{
                color: colors.black,
                marginBottom: 1,
                fontWeight: 'bold',
              }}
              variant="subtitle1"
            >
              Total
            </Typography>
            <Typography
              sx={{
                color: colors.black,
                marginBottom: 1,
                fontWeight: 'bold',
              }}
              variant="subtitle1"
            >
              {applyVoucher.status === 'true'
                ? parseInt(cartList?.data[0]?.t_price) +
                  parseInt(cartList?.data[0]?.t_ship) -
                  parseInt(applyVoucher?.voucher?.p_price)
                : parseInt(cartList?.data[0]?.t_price) +
                  parseInt(cartList?.data[0]?.t_ship)}
            </Typography>
          </Box>
          <Box className={classes.horizontal_devider}></Box>
          <Box py={3}>
            <Box mt={4}>
              <ButtonTheme text="To checkout" onClick={() => checkout()} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default CheckoutPageNew;
