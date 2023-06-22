import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import { LoginX } from '../../redux/actions/accounts';

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
import { useTranslation } from 'react-i18next';

const Register = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dataLogin, setDataLogin] = React.useState({
    name: 'abc',
    username: 'vinhtu125@gmail.com',
    password: '123456',
    phone: '123',
  });

  const handleDataLogin = (e) => {
    setDataLogin({ ...dataLogin, [e.target.id]: e.target.value });
  };

  const onLogin = () => {
    // dispatch(LoginX(dataLogin));
    navigate('/');
  };
  const toRegister = () => {
    navigate('/');
  };
  const toForgetPassword = () => {
    navigate('/forget-password');
  };
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Breadcrumb breadcrumb="Login/Register" />
      <Box className={classes.container_login}>
        <Box className={classes.box_form_login}>
          <input
            type="text"
            id="name"
            placeholder={`${t('login.placeholder_name')}`}
            value={dataLogin.name}
            onChange={handleDataLogin}
            className={classes.input_login}
          />
          <input
            type="text"
            id="username"
            placeholder={`${t('login.placeholder_username')}`}
            value={dataLogin.username}
            onChange={handleDataLogin}
            className={classes.input_login}
          />

          <input
            type="password"
            id="password"
            placeholder={`${t('login.placeholder_password')}`}
            value={dataLogin.password}
            className={classes.input_login}
            onChange={handleDataLogin}
          />
          <input
            type="text"
            id="phone"
            placeholder={`${t('login.placeholder_phone')}`}
            value={dataLogin.phone}
            onChange={handleDataLogin}
            className={classes.input_login}
          />

          <Box className={classes.box_btn_form}>
            <Box onClick={() => onLogin()} className={classes.btn_login}>
              {' '}
              {t('login.btn_login')}
            </Box>
            <Box className={classes.btn_register} onClick={() => toRegister()}>
              {' '}
              {t('login.btn_register')}
            </Box>
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <Typography
              color="primary"
              onClick={() => toForgetPassword()}
              sx={{ cursor: 'pointer' }}
            >
              {t('login.forget_password')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Register;
