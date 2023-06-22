import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Grid,
  Button,
  List,
  Divider,
  ListItem,
  Drawer,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import ChatBox, { ChatFrame } from 'react-chat-plugin';
import LinearProgress from '@mui/material/LinearProgress';

import {
  PhoneEnabled,
  ShoppingCart,
  Notifications,
  Person,
  KeyboardArrowDown,
  KeyboardArrowUp,
  SetMeal,
  LocalFireDepartment,
  Message,
  ShoppingCartOutlined,
  Menu,
  SearchOutlined,
  Inbox,
  Mail,
} from '@mui/icons-material';
import useStyles from './styles';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../lib/colors';
import './style.css';
import CartHeaderItem from '../CartHeaderItem';
import { useNavigate } from 'react-router-dom';
import NotificationHeaderItem from '../NotificationHeaderItem';
import { useTranslation } from 'react-i18next';
import { GetCategorys } from '../../redux/actions/categorys';
import {
  GetNotification,
  GetNotificationAccount,
} from '../../redux/actions/notifications';
import { GetCartAccount } from '../../redux/actions/carts';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { GetAccount, LogoutX } from '../../redux/actions/accounts';
import { GetComment } from '../../redux/actions/comments';
import {
  Clear,
  LocationOnOutlined,
  LocalShippingOutlined,
} from '@mui/icons-material';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { useSnackbar } from '@mui/base/SnackbarUnstyled';
import { css, keyframes } from '@mui/system';
import { setLanguage, setNote } from '../../redux/actions/utils';
import UtilsNote from './UtilsNote';

import clsx from 'clsx';
import AccountDraw from '../AccountDraw';
import CartDraw from '../CartDraw';
import { GetProducts } from '../../redux/actions/products';
import { SearchCharacter } from '../../redux/actions/searchs';

const blue = {
  50: '#F0F7FF',
  400: '#3399FF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  200: '#E0E3E7',
};

const listLanguage = [
  {
    icon: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png',
    name: 'English',
    key: 'en',
  },
  {
    icon: 'https://cdn.countryflags.com/thumbs/vietnam/flag-800.png',
    name: 'Viet Nam',
    key: 'vi',
  },
  {
    icon: 'https://cdn.countryflags.com/thumbs/italy/flag-800.png',
    name: 'Italy',
    key: 'it',
  },
  {
    icon: 'https://cdn.countryflags.com/thumbs/vietnam/flag-800.png',
    name: 'Viet Nam',
    key: 'vi',
  },
  {
    icon: 'https://cdn.countryflags.com/thumbs/italy/flag-800.png',
    name: 'Italy',
    key: 'en',
  },
];

const listMoney = [
  {
    icon: '',
    name: 'USD $',
  },
  {
    icon: '',
    name: 'VND Đ ',
  },
];

const snackbarInRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const CustomSnackbar = styled('div')(
  ({ theme }) => css`
    position: fixed;
    z-index: 5500;
    display: flex;
    right: 16px;
    top: 16px;
    left: auto;
    justify-content: start;
    font-weight: 600;
    animation: ${snackbarInRight} 500ms;
    transition: transform 0.2s ease-out;
  `,
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 6,
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  width: 900,
  height: 48,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  display: 'flex',
  justifyContent: 'space-between',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0.5)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
    fontSize: 14,
  },
}));

const HeaderDesktop = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [onShowCategory, setOnShowCategory] = React.useState(false);
  const clickOnShowCategory = () => {
    setOnShowCategory(!onShowCategory);
    if (onShowCategory) {
      document.getElementById('menu_all_category_none').className =
        'menu_all_category';
    } else {
      document.getElementById('menu_all_category_none').className =
        'menu_all_category_none';
    }
  };

  const navigate = useNavigate();
  const toCustomorCare = () => {
    navigate('/customor-care');
  };
  const toAbout = () => {
    navigate(`/about`);
  };
  const toContact = () => {
    navigate(`/contact`);
  };
  const toLogin = () => {
    navigate(`/login`);
  };
  const toHome = () => {
    navigate(`/`);
  };
  const toNotification = () => {
    navigate(`/account/notification`);
  };
  const toCart = () => {
    navigate(`/cart`);
  };
  const toAccount = () => {
    navigate(`/account`);
  };
  const toCategory = (category) => {
    navigate(`/category/${category}`, {
      state: {
        params: category,
      },
    });
  };
  const toVoucher = () => {
    navigate(`/voucher`);
  };
  const toCheckOrder = () => {
    navigate(`/account/check-order`);
  };

  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = React.useState('Việt Nam');
  const changeLanguage = (e) => {
    i18n.changeLanguage(e);
    if (e === 'vi') {
      console.log('vi', 'da vo thay doi');
      dispatch(setLanguage('vi'));
      setCurrentLanguage('Việt Nam');
    } else if (e === 'en') {
      console.log('en', 'da vo thay doi');
      dispatch(setLanguage('en'));
      setCurrentLanguage('English');
    }
  };

  const { isPostCart } = useSelector((state) => state.cart);
  const { isPutCart } = useSelector((state) => state.cart);
  const { isPutComment } = useSelector((state) => state.comment);
  const { isPostOrder } = useSelector((state) => state.order);
  const { isPutVoucherAccount } = useSelector((state) => state.account);
  const { note } = useSelector((state) => state.utils);
  const { isPutNotification } = useSelector((state) => state.notification);
  const { productList } = useSelector((state) => state.product);

  const { dataSearch } = useSelector((state) => state.search);

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

  const [isNewNote, setIsNewNote] = React.useState(false);

  useEffect(() => {
    dispatch(GetProducts());
    dispatch(GetCategorys());
  }, [dispatch]);

  const toLogout = () => {
    dispatch(LogoutX(refreshtoken));
    navigate('/login');
  };

  useEffect(() => {
    if (token) {
      dispatch(GetAccount(account_id, token));
      dispatch(GetNotificationAccount(account_id, token));
      dispatch(GetCartAccount(account_id, token));
    }
  }, [dispatch]);

  const validationNew = () => {
    if (notificationList) {
      let dem = 0;
      for (let i = 0; i < notificationList.length; i += 1) {
        if (notificationList[i].status === 'Pending') {
          dem += 1;
        }
        if (i === notificationList.length - 1) {
          if (dem > 0) {
            setIsNewNote(true);
          } else {
            setIsNewNote(false);
          }
        }
      }
    }
  };

  useEffect(() => {
    validationNew();
  }, [notificationList]);

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [isPostCart]);

  useEffect(() => {
    if (token) {
      dispatch(GetCartAccount(account_id, token));
    }
  }, [isPutCart]);

  useEffect(() => {
    if (token) {
      dispatch(GetNotificationAccount(account_id, token));
    }
    validationNew();
  }, [isPutComment, isPostOrder, isPutNotification]);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const { getRootProps, onClickAway } = useSnackbar({
    onClose: handleClose,
    open,
    autoHideDuration: 5000,
  });

  const handleOpen = (e) => {
    setOpen(e);
    dispatch(setNote(false, null));
  };

  useEffect(() => {
    if (note?.open) {
      setOpen(true);
    }
  }, [note]);

  useEffect(() => {
    if (open === true) {
      setTimeout(() => {
        setOpen(false);
        dispatch(setNote(false, null));
      }, 5000);
    }
  }, [open]);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open, type) => (event) => {
    console.log(event, 'event');
    // if (
    //   event.type === 'keydown' &&
    //   (event.key === 'Tab' || event.key === 'Shift')
    // ) {
    //   return;
    // }
    setState({ ...state, [anchor]: open });
    setTypeDraw(type);
  };

  const [typeDraw, setTypeDraw] = React.useState('account');
  const Account = (anchor) => (
    <Box
      sx={{ width: 320, zIndex: 99999 }}
      role="presentation"
      // className={clsx(classes.list)}
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      {typeDraw === 'account' ? (
        <AccountDraw />
      ) : typeDraw === 'cart' ? (
        <CartDraw />
      ) : null}
    </Box>
  );

  const [txtSearch, setTxtSearch] = React.useState('');

  const ToProduct = (id, name) => {
    navigate(`/product-detail/${name}`, {
      state: { id: id },
    });
  };

  var header = document.getElementById('myHeader');
  var sticky = header?.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header?.classList.add('sticky');
    } else {
      header?.classList.remove('sticky');
    }
  }
  window.onscroll = function () {
    myFunction();
  };

  const onChangeSearch = (e) => {
    setTxtSearch(e);
    console.log(txtSearch, 'txtSearch');
    dispatch(SearchCharacter(e));
  };

  console.log(dataSearch, 'dataSearch');

  return (
    <Box sx={{ position: 'relative' }}>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false, null)}
        // BackdropProps={{ invisible: true }}
      >
        {Account('right')}
      </Drawer>

      <Box className={classes.container_top_header_new}>
        <Box className={classes.wrap_top_header_new}>
          <Box className={classes.left_top_header_new}>
            <Typography
              variant="subtitle2"
              className={classes.title_top_header_new}
            >
              Free standard shipping for orders over $299.
            </Typography>
          </Box>
          <Box className={classes.right_top_header_new}>
            <Box
              className={classes.item_right_top_header_new}
              onClick={() => navigate('/store-location')}
            >
              <LocationOnOutlined
                sx={{ fontSize: 20 }}
                className={classNames(classes.icon_item_right, 'hover_item')}
              />
              <Typography
                variant="subtitle2"
                className={classNames(classes.txt_item_right, 'hover_item')}
              >
                Store Location
              </Typography>
            </Box>
            <Box className={classes.horizontal_devider_new}></Box>
            <Box className={classes.item_right_top_header_new}>
              <LocalShippingOutlined
                sx={{ fontSize: 20 }}
                className={classNames(classes.icon_item_right, 'hover_item')}
              />
              <Typography
                variant="subtitle2"
                className={classNames(classes.txt_item_right, 'hover_item')}
              >
                Track Your Order
              </Typography>
            </Box>
            <Box className={classes.horizontal_devider_new}></Box>
            <Box
              className={classNames(
                classes.item_right_top_header_new,
                classes.focus_right_top_header,
              )}
            >
              <LocalShippingOutlined
                sx={{ fontSize: 20 }}
                className={classNames(classes.icon_item_right, 'hover_item')}
              />
              <Typography
                variant="subtitle2"
                className={classNames(classes.txt_item_right, 'hover_item')}
              >
                {currentLanguage}
              </Typography>
              <KeyboardArrowDown sx={{ fontSize: 20, height: 'auto' }} />

              <Box
                className={classNames(
                  classes.extend_menu_top_header,
                  'extend_menu_top_header',
                )}
              >
                <Box className={classes.border_arrow}></Box>

                {listLanguage.map((item) => {
                  return (
                    <Box
                      py={1}
                      px={3}
                      className={classes.item_language_dropdow}
                      onClick={() => changeLanguage(item.key)}
                    >
                      <img src={item.icon} className={classes.icon_language} />
                      <Typography
                        variant="subtitle2"
                        className={classNames(
                          classes.title_language,
                          'title_language',
                        )}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box className={classes.horizontal_devider_new}></Box>
            <Box
              className={classNames(
                classes.item_right_top_header_new,
                classes.focus_money_right_top_header,
              )}
            >
              <LocalShippingOutlined
                sx={{ fontSize: 20 }}
                className={classNames(classes.icon_item_right, 'hover_item')}
              />
              <Typography
                variant="subtitle2"
                className={classNames(classes.txt_item_right, 'hover_item')}
              >
                EUR $
              </Typography>
              <KeyboardArrowDown sx={{ fontSize: 20, height: 'auto' }} />
              <Box
                className={classNames(
                  classes.extend_menu_top_header,
                  'extend_menu_top_header',
                )}
              >
                <Box className={classes.border_arrow}></Box>
                {listMoney.map((item) => {
                  return (
                    <Box
                      py={1}
                      px={3}
                      className={classes.item_language_dropdow}
                    >
                      <Typography
                        variant="subtitle2"
                        className={classNames(
                          classes.title_language,
                          'title_language',
                        )}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box py={3} id="myHeader" className="myHeader">
        <Box
          className={classes.container_middle_header_new}
          sx={{ flexGrow: 1 }}
        >
          <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
            <img
              src="https://rubiktheme.com/demo/rb_mercado_demo/img/mercado-suppermarket-store-logo-1633487728.jpg"
              className={classes.logo_header}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItem: 'center' }}>
            <Box className={classes.item_account_header}>
              <Box
                className={classes.box_avatar_header}
                onClick={toggleDrawer('right', true, 'account')}
                sx={{ cursor: 'pointer' }}
              >
                <img
                  src={
                    accountDetail?.avatar
                      ? 'https://khoinguonsangtao.vn/wp-content/uploads/2022/02/anh-dai-dien-fb-dep.jpg'
                      : 'https://e7.pngegg.com/pngimages/628/487/png-clipart-computer-icons-individual-symbol-save-individual-miscellaneous-photography-thumbnail.png'
                  }
                  className={classes.img_avatar_header}
                />
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  className={classes.name_avatar_header}
                >
                  {accountDetail ? accountDetail?.username : 'My Account'}
                </Typography>
                <Typography variant="body1" color="text.darkGray">
                  {accountDetail ? 'info' : 'Sign in'}
                </Typography>
              </Box>
            </Box>

            <Box className={classes.item_cart_header}>
              <Box
                className={classes.box_cart_header}
                sx={{ cursor: 'pointer' }}
                onClick={toggleDrawer('right', true, 'cart')}
              >
                <ShoppingCartOutlined
                  sx={{ fontSize: 20 }}
                  // className={classes.img_cart_header}
                />
                {cartList &&
                cartList.data[0] &&
                cartList.data[0].cartitem.length > 0 ? (
                  <Box className={classes.dot_cart_header}>
                    <Typography variant="overline" color="text.white">
                      {cartList.data[0].amount}
                    </Typography>
                  </Box>
                ) : null}
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  className={classes.name_cart_header}
                >
                  My Cart
                </Typography>
                <Typography variant="body1" color="text.darkGray">
                  {cartList?.data[0]?.t_price
                    ? cartList?.data[0]?.t_price
                    : 'No product'}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.container_footer_header_new}>
        <Box className={classes.wrap_footer_header_new}>
          <Box className={classes.left_footer_header}>
            <Box py={2.5} mr={7} className={classes.focus_all_nav}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <Menu
                  sx={{
                    fontSize: 28,
                    marginRight: 1,
                    color: colors.white,
                    cursor: 'pointer',
                  }}
                />
                <Typography
                  variant="subtitle1"
                  color="text.white"
                  sx={{ fontWeight: 500, cursor: 'pointer' }}
                >
                  All Categories
                </Typography>
                <Box
                  className={classNames(
                    classes.extend_nav_footer_header,
                    'extend_nav_footer_header',
                  )}
                >
                  {' '}
                  {categoryList &&
                    categoryList.data.results.map((item) => (
                      <Box
                        className={classes.item_nav_dropdow}
                        onClick={() => toCategory(item.name)}
                      >
                        {/* <img src={item.icon} className={classes.icon_nav} /> */}
                        <Typography
                          variant="body1"
                          className={classNames(classes.title_nav, 'title_nav')}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                    ))}
                </Box>
              </Box>
            </Box>
            <Box
              sx={{ position: 'relative' }}
              className={classNames(classes.wp_search, 'wp_search')}
            >
              <Box className={classes.wrap_input}>
                <Box className={classes.wrap_content_input}>
                  <SearchOutlined
                    sx={{
                      fontSize: 24,
                      transform: 'rotate(90deg)',
                      color: colors.darkGray,
                    }}
                  />
                  <input
                    type="text"
                    value={txtSearch}
                    onChange={(e) => onChangeSearch(e.target.value)}
                    className={classNames(
                      classes.input_search_header,
                      'input_search',
                    )}
                  />
                </Box>
                <Box className={classes.btn_search}>
                  <Typography variant="subtitle1" color="text.white">
                    Search
                  </Typography>
                </Box>
              </Box>

              {dataSearch?.length > 0 && (
                <Box
                  className={classNames(
                    classes.bx_content_search,
                    'content_search',
                  )}
                >
                  {dataSearch?.map((item) => (
                    <Typography
                      key={item._id}
                      variant="body1"
                      className={classes.name_product_search}
                      sx={{ marginBottom: 2 }}
                      onClick={() => ToProduct(item._id, item.name)}
                    >
                      {item.name}
                    </Typography>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              color="text.white"
              sx={{ fontWeight: 500, cursor: 'pointer' }}
            >
              Wishlist Product
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* <MessengerCustomerChat pageId="127080551312733" appId="556417379588684" /> */}
    </Box>
  );
};

export default HeaderDesktop;
