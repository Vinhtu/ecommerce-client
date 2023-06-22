import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import useStyles from './styles';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../lib/colors';
import Slider from 'react-slick';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { GetVoucher, GetVoucherDate } from '../../redux/actions/vouchers';
import {
  GetAccount,
  PutAccountGiveVoucher,
} from '../../redux/actions/accounts';
import { GetBanners } from '../../redux/actions/banners';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import classNames from 'classnames';
import Input from '../Input';
import ButtonTheme from '../ButtonTheme';
import { LoginX, Register } from '../../redux/actions/accounts';
import { useTranslation } from 'react-i18next';

import {
  Instagram,
  Google,
  FacebookOutlined,
  HeadphonesOutlined,
  MapOutlined,
  YouTube,
  PermIdentityOutlined,
  LocalActivityOutlined,
  LocalOfferOutlined,
  LocalShippingOutlined,
  NotificationsActiveOutlined,
  LogoutOutlined,
} from '@mui/icons-material/';
const AccountDraw = (props) => {
  const classes = useStyles();

  const [isLogin, setIsLogin] = React.useState('login');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accountLogout } = useSelector((state) => state.account);

  const [stateLogin, setStateLogin] = React.useState('');

  const [errUsername, setErrUsername] = React.useState('');
  const [errPassword, setErrPassword] = React.useState('');

  const { accountLogin, accountDetail } = useSelector((state) => state.account);
  const [dataLogin, setDataLogin] = React.useState({
    username: 'vinhtu125@gmail.com',
    password: '123456',
  });

  const handleDataLogin = (e) => {
    setDataLogin({ ...dataLogin, [e.target.id]: e.target.value });
  };

  const onLogin = () => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(dataLogin.username)) {
      setErrUsername('');
      if (dataLogin.password.length > 5 && dataLogin.username.length <= 20) {
        setErrPassword('');
        dispatch(LoginX(dataLogin));
      } else {
        setErrPassword('Password tu 6 - 20 ky tu');
      }
    } else {
      setErrUsername('Thong tin phai la email');
    }
  };
  const toRegister = () => {
    // dispatch(Login(dataLogin));
    navigate('/register');
  };
  const toForgetPassword = () => {
    navigate('/forget-password');
  };
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const accountInfo = localStorage.getItem('accountinfo');
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const account_id = JSON.parse(accountInfo);
    const token = JSON.parse(accessToken);
    const refreshtoken = JSON.parse(refreshToken);
    if (accountLogin) {
      if (token) {
        dispatch(GetAccount(account_id, token));
      }
      navigate('/');
    } else if (accountLogin === false) {
      setStateLogin('Username or password valid !');
    } else {
      localStorage.removeItem('accountinfo');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      navigate('/');
    }
  }, [accountLogin]);

  console.log(accountLogin, 'accountLogin');

  return (
    <Box className={classes.container_account_draw}>
      {accountDetail ? (
        <>
          {/* <Typography>{accountDetail.username}</Typography> */}

          <Box className={classes.bx_item_account}>
            <PermIdentityOutlined
              sx={{ fontSize: 20, marginRight: 2 }}
              className="item_hover"
            />
            <Typography
              variant="subtitle1"
              sx={{ color: colors.black }}
              className="item_hover"
            >
              Thông tin
            </Typography>
          </Box>
          <Box className={classes.horizontal_devider}></Box>
          <Box className={classes.bx_item_account}>
            <LocalOfferOutlined
              sx={{ fontSize: 20, marginRight: 2 }}
              className="item_hover"
            />
            <Typography
              variant="subtitle1"
              sx={{ color: colors.black }}
              className="item_hover"
            >
              Voucher
            </Typography>
          </Box>
          <Box className={classes.horizontal_devider}></Box>

          <Box className={classes.bx_item_account}>
            <LocalShippingOutlined
              sx={{ fontSize: 20, marginRight: 2 }}
              className="item_hover"
            />
            <Typography
              variant="subtitle1"
              sx={{ color: colors.black }}
              className="item_hover"
            >
              Đơn hàng (10)
            </Typography>
          </Box>
          <Box className={classes.horizontal_devider}></Box>
          <Box className={classes.bx_item_account}>
            <NotificationsActiveOutlined
              sx={{ fontSize: 20, marginRight: 2 }}
              className="item_hover"
            />
            <Typography
              variant="subtitle1"
              sx={{ color: colors.black }}
              className="item_hover"
            >
              Thông báo
            </Typography>
          </Box>
          <Box className={classes.horizontal_devider}></Box>

          <Box className={classes.bx_item_account}>
            <LogoutOutlined
              sx={{ fontSize: 20, marginRight: 2 }}
              className="item_hover"
            />
            <Typography
              variant="subtitle1"
              sx={{ color: colors.black }}
              className="item_hover"
            >
              Logout
            </Typography>
          </Box>
          <Box className={classes.horizontal_devider}></Box>
        </>
      ) : (
        <>
          <Box my={0.5} px={3} className={classes.box_title_sign_register}>
            <Typography
              variant="subtitle1"
              className={classes.txt_title}
              sx={{ fontWeight: 'bold', cursor: 'pointer' }}
              onClick={() => setIsLogin('login')}
            >
              {t('login.btn_login')}
            </Typography>
            <Box className={classes.vertical_devider}></Box>
            <Typography
              className={classes.txt_title}
              variant="subtitle1"
              sx={{
                fontWeight: 'bold',
                color: colors.darkGray4,
                cursor: 'pointer',
              }}
              onClick={() => setIsLogin('register')}
            >
              {t('login.btn_register')}
            </Typography>
          </Box>
          {isLogin === 'login' && (
            <Box mt={3.75}>
              <Box mb={2}>
                {setErrUsername && (
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ marginBottom: 0.5 }}
                  >
                    {errUsername}
                  </Typography>
                )}
                <Input
                  name="username"
                  id="username"
                  type="email"
                  onChange={handleDataLogin}
                  value={dataLogin.username}
                  placeholder={`${t('login.placeholder_username')}`}
                />
              </Box>
              <Box mb={2}>
                {setErrPassword && (
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ marginBottom: 0.5 }}
                  >
                    {errPassword}
                  </Typography>
                )}
                <Input
                  type="password"
                  id="password"
                  placeholder={`${t('login.placeholder_password')}`}
                  value={dataLogin.password}
                  onChange={handleDataLogin}
                />
              </Box>
              <Box mb={2}>
                {stateLogin && (
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ marginBottom: 0.5 }}
                  >
                    {stateLogin}
                  </Typography>
                )}
                <ButtonTheme
                  text={t('login.btn_login')}
                  uppercase
                  onClick={() => onLogin()}
                />
              </Box>
              <Box mb={2}>
                <Typography
                  variant="subtile1"
                  color={colors.darkGray4}
                  className={classes.txt_forgetpassword}
                >
                  {t('login.forget_password')}
                </Typography>
              </Box>
              <Box mb={2}>
                <Box className={classes.bx_item_login}>
                  <Box className={classes.box_icon_login_face}>
                    <FacebookOutlined
                      sx={{ fontSize: 24, color: colors.white }}
                    />
                  </Box>
                  <Box className={classes.box_icon_login_google}>
                    <Google sx={{ fontSize: 24, color: colors.white }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
          {isLogin === 'register' && (
            <Box mt={3.75}>
              <Box mb={2}>
                <Input name="email" id="email" placeholder="Email" />
              </Box>
              <Box mb={2}>
                <Input name="password" id="password" placeholder="Password" />
              </Box>
              <Box mb={2}>
                <Input name="name" id="name" placeholder="Full name" />
              </Box>

              <Box mb={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      size="20px"
                      sx={{
                        color: colors.darkGray3,
                        '&.Mui-checked': {
                          color: colors.orange,
                        },

                        paddingRight: 0.5,
                        fontSize: 20,
                      }}
                      // name={item.name}
                      // onChange={(e) => handleChangeStar(e)}
                    />
                  }
                  sx={{
                    color: colors.darkGray3,
                  }}
                  label="I agree to the terms"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      size="20px"
                      sx={{
                        color: colors.gray,
                        '&.Mui-checked': {
                          color: colors.orange,
                        },
                        paddingRight: 0.5,
                        fontSize: 20,
                      }}
                      // name={item.name}
                      // onChange={(e) => handleChangeStar(e)}
                    />
                  }
                  sx={{ color: colors.darkGray3 }}
                  label="
                    Sign up for our newsletter"
                />
              </Box>
              <Box mb={2}>
                <ButtonTheme text="Register" uppercase />
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default AccountDraw;
