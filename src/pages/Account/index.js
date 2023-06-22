import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import { GetAccount, PutAccount, Register } from '../../redux/actions/accounts';

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
import { useTranslation } from 'react-i18next';

const Account = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editName, setEditName] = React.useState(false);
  const [editPhone, setEditPhone] = React.useState(false);
  const [editUsername, setEditUsername] = React.useState(false);
  const [editAddress, setEditAddress] = React.useState(false);

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const { accountDetail } = useSelector((state) => state.account);
  const { isPutAccount } = useSelector((state) => state.account);

  useEffect(() => {
    if (token) {
      dispatch(GetAccount(account_id, token));
    }
  }, [dispatch]);

  useEffect(() => {
    setDataAccount({
      ...dataAccount,
      fullname: accountDetail?.fullname,
      username: accountDetail?.username,
      phone: accountDetail?.phone,
      streetAddress: accountDetail?.streetAddress,
      wardCommunedistrictAddress: accountDetail?.wardCommunedistrictAddress,
      cityAddress: accountDetail?.cityAddress,
      zipAddress: accountDetail?.zipAddress,
    });
  }, [accountDetail]);

  const [dataAccount, setDataAccount] = React.useState({
    fullname: accountDetail?.fullname,
    username: accountDetail?.username,
    phone: accountDetail?.phone,
    streetAddress: accountDetail?.streetAddress,
    wardCommunedistrictAddress: accountDetail?.wardCommunedistrictAddress,
    cityAddress: accountDetail?.cityAddress,
    zipAddress: accountDetail?.zipAddress,
  });

  const handleDataAccount = (e) => {
    setDataAccount({ ...dataAccount, [e.target.id]: e.target.value });
  };

  const editInfoAccount = () => {
    if (token) {
      dispatch(PutAccount(account_id, dataAccount, token));
    }
    setEditName(false);
    setEditPhone(false);
    setEditUsername(false);
    setEditAddress(false);
  };

  useEffect(() => {
    if (token) {
      dispatch(GetAccount(account_id, token));
    }
  }, [isPutAccount]);

  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Breadcrumb breadcrumb="Login/Register" />
      <Box className={classes.container_account}>
        <LayoutAccount breadcrumb="Account">
          <Box className={classes.head_body_account}>
            <Typography variant="h2">{t('account.info_account')}</Typography>
          </Box>
          <Box className={classes.content_body_account}>
            <Box className={classes.box_item_account}>
              <Box className={classes.head_item_account}>
                <Typography variant="h3">{t('account.name')}</Typography>
                <Box className={classes.vertical_devider}>|</Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontStyle: 'italic', cursor: 'pointer' }}
                  color="primary"
                  onClick={() => setEditName(true)}
                >
                  {t('account.edit')}
                </Typography>
              </Box>
              <Box className={classes.body_item}>
                {editName ? (
                  <Box className={classes.box_edit_item_name}>
                    <Box sx={{ marginRight: 2 }}>
                      <input
                        type="text"
                        id="fullname"
                        value={dataAccount.fullname}
                        onChange={handleDataAccount}
                        className={classes.input_edit_info_account}
                      />
                    </Box>
                    <Box className={classes.box_btn}>
                      <Box
                        className={classes.btn_cancle}
                        onClick={() => setEditName(false)}
                      >
                        {t('account.cancel')}
                      </Box>
                      <Box
                        className={classes.btn_save}
                        onClick={() => editInfoAccount()}
                      >
                        {' '}
                        {t('account.edit')}
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  <Typography variant="subtitle2">
                    {dataAccount.fullname}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box className={classes.box_item_account}>
              <Box className={classes.head_item_account}>
                <Typography variant="h3"> {t('account.username')}</Typography>
                <Box className={classes.vertical_devider}>|</Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontStyle: 'italic', cursor: 'pointer' }}
                  color="primary"
                  onClick={() => setEditUsername(true)}
                >
                  {t('account.edit')}
                </Typography>
              </Box>
              <Box className={classes.body_item}>
                {editUsername ? (
                  <Box className={classes.box_edit_item_name}>
                    <Box sx={{ marginRight: 2 }}>
                      <input
                        type="text"
                        id="username"
                        value={dataAccount.username}
                        onChange={handleDataAccount}
                        className={classes.input_edit_info_account}
                      />
                    </Box>
                    <Box className={classes.box_btn}>
                      <Box
                        className={classes.btn_cancle}
                        onClick={() => setEditUsername(false)}
                      >
                        {t('account.cancel')}
                      </Box>
                      <Box
                        className={classes.btn_save}
                        onClick={() => editInfoAccount()}
                      >
                        {' '}
                        {t('account.edit')}
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  <Typography variant="subtitle2">
                    {dataAccount.username}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box className={classes.box_item_account}>
              <Box className={classes.head_item_account}>
                <Typography variant="h3"> {t('account.phone')}</Typography>
                <Box className={classes.vertical_devider}>|</Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontStyle: 'italic', cursor: 'pointer' }}
                  color="primary"
                  onClick={() => setEditPhone(true)}
                >
                  {t('account.edit')}
                </Typography>
              </Box>
              <Box className={classes.body_item}>
                {editPhone ? (
                  <Box className={classes.box_edit_item_name}>
                    <Box sx={{ marginRight: 2 }}>
                      <input
                        type="text"
                        id="phone"
                        value={dataAccount.phone}
                        onChange={handleDataAccount}
                        className={classes.input_edit_info_account}
                      />
                    </Box>
                    <Box className={classes.box_btn}>
                      <Box
                        className={classes.btn_cancle}
                        onClick={() => setEditPhone(false)}
                      >
                        {t('account.cancel')}
                      </Box>
                      <Box
                        className={classes.btn_save}
                        onClick={() => editInfoAccount()}
                      >
                        {' '}
                        {t('account.edit')}
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  <Typography variant="subtitle2">
                    {dataAccount.phone}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
          <Box className={classes.box_item_account}>
            <Box className={classes.head_item_account}>
              <Typography variant="h3"> {t('account.address')}</Typography>
              <Box className={classes.vertical_devider}>|</Box>
              <Typography
                variant="subtitle2"
                sx={{ fontStyle: 'italic', cursor: 'pointer' }}
                color="primary"
                onClick={() => setEditAddress(true)}
              >
                {t('account.edit')}
              </Typography>
            </Box>
            <Box className={classes.body_item}>
              {editAddress ? (
                <Box className={classes.box_edit_item_address}>
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
                    <Box
                      className={classes.btn_save}
                      onClick={() => editInfoAccount()}
                    >
                      {' '}
                      {t('account.edit')}
                    </Box>
                  </Box>
                </Box>
              ) : (
                <Typography variant="subtitle2">
                  {dataAccount.streetAddress +
                    ' ' +
                    dataAccount.wardCommunedistrictAddress +
                    ' ' +
                    dataAccount.cityAddress +
                    ' ' +
                    dataAccount.zipAddress}{' '}
                  {}
                </Typography>
              )}
            </Box>
          </Box>
        </LayoutAccount>
        {/* <Box className={classes.container_edit_name}>
          <Box className={classes.box_edit_name}>
            <Box>
              <Typography variant="h3" sx={{ marginBottom: 2 }}>
                Ho va ten
              </Typography>
              <input
                type="text"
                id="username"
                value="ho va ten"
                onChange={handleDataLogin}
                className={classes.input_edit_info_account}
              />
            </Box>
            <Box className={classes.box_footer_model}>
              <Box></Box>
              <Box className={classes.box_btn}>
                <Box className={classes.btn_cancle}>Huy</Box>
                <Box className={classes.btn_save}>Chinh sua</Box>
              </Box>
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Layout>
  );
};

export default Account;
