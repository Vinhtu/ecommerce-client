import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';
import Tabs from 'react-bootstrap/Tabs';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import ProductItem from '../../components/ProductItem';
import DescriptionTab from '../../components/DescriptionTab';
import SpecificationTab from '../../components/SpecificationTab';
import MeterialTab from '../../components/MeterialTab';
import ReviewRattingTab from '../../components/ReviewRattingTab';
import { GetCartAccount, PostCart } from '../../redux/actions/carts';
import { GetCarts } from '../../redux/actions/carts';
import colors from '../../lib/colors';
import { Star, StarOutlined } from '@mui/icons-material';

import './style.css';

import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Pagination,
  Drawer,
} from '@mui/material';

import useStyles from './styles';
import ItemDescriptionProduct from '../../components/ItemDescriptionProduct';
import ItemCommentProduct from '../../components/ItemCommentProduct';
import ProductSaleItem from '../../components/ProductSaleItem';
import SidebarPostItem from '../../components/SidebarPostItem';
import RightSidebar from '../../components/RightSidebar';
import { useTranslation } from 'react-i18next';
import {
  GetProduct,
  GetProductCategory,
  GetProducts,
} from '../../redux/actions/products';
import ItemRateProduct from '../../components/ItemRateProduct';
import ItemWritenCommentProduct from '../../components/ItemWritenCommentProduct';
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  Remove,
  Add,
  AddShoppingCart,
  FavoriteBorderOutlined,
  ScaleOutlined,
  Share,
  TurnedInNot,
  MapOutlined,
  FacebookOutlined,
  YouTube,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from '@mui/icons-material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import classNames from 'classnames';
import ListLikeSection from '../../components/ListLikeSection';
import FooterV2 from '../../components/FooterV2';
import { GetAccount } from '../../redux/actions/accounts';
import ConvertVND from '../../components/ConvertMoney/ConvertVND';
import AccountDraw from '../../components/AccountDraw';
import clsx from 'clsx';
import usePagination from '../../components/Pagination';

const ProductDetailPageNew = () => {
  const classes = useStyles();

  const customeSlider = useRef();

  const [sliderSettings, setSliderSettings] = useState({
    customPaging: function (i) {
      return (
        <a>
          <img
            style={{ width: 97, height: 97, borderRadius: 16, marginRight: 16 }}
            src={
              productDetail && productDetail?.thumbnail_children[i].thumbnail
            }
          />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots-product-detail',

    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    className: 'slidercategory',
  });

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  // const [value, setValue] = React.useState('1');

  // const handleChange = (e, newValue) => {
  //   setValue(newValue);
  // };

  const { t, i18n } = useTranslation();

  const location = useLocation();
  const dispatch = useDispatch();

  const { cartList } = useSelector((state) => state.cart);
  const { productTopSale } = useSelector((state) => state.product);
  const { productCategoryList } = useSelector((state) => state.product);
  const { postComment } = useSelector((state) => state.product);
  const { isPutComment } = useSelector((state) => state.comment);

  const { productDetail } = useSelector((state) => state.product);
  const { accountDetail } = useSelector((state) => state.account);

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    dispatch(GetProduct(location.state.id));
    if (token) {
      dispatch(GetAccount(account_id, token));
    }
  }, [dispatch]);

  const [key, setKey] = useState('Description');

  const [color, setColor] = React.useState(productDetail?.color[0].name);
  const [size, setSize] = React.useState(productDetail?.color[0].size);
  const [thumbnailChildren, setThumbnailChildren] = React.useState(
    productDetail?.thumbnail_children,
  );

  const [selectSize, setSelectSize] = React.useState(
    productDetail?.color[0].size[0],
  );
  const [amount, setAmount] = React.useState(1);

  const [price, setPrice] = React.useState(
    productDetail?.color[0].size[0].price,
  );

  const [pprice, setPPrice] = React.useState(
    productDetail?.color[0].size[0].p_price,
  );

  const [selectColorIdx, setSelectColorIdx] = React.useState(0);
  const [selectSizeIdx, setSelectSizeIdx] = React.useState(0);

  const handleColor = (e, idx) => {
    setSize(e.size);
    setColor(e.name);
    setSelectColorIdx(idx);
  };

  const handleSize = (e, idx) => {
    setSelectSize(e);
    setPrice(e.price);
    setPPrice(e.p_price);
    setSelectSizeIdx(idx);
  };

  const postCart = () => {
    const data = {
      color,
      size: selectSize.name,
      price,
      amount,
      account: account_id,
      _id: location.state.id,
      _idcart: cartList && cartList.data[0] && cartList.data[0]._id,
    };

    if (token) {
      dispatch(PostCart(data, token));
      // dispatch(setNote(true, 'isPostCart'));
    }

    setAmount(1);
  };
  const [value, setValue] = React.useState('1');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const [showDescription, setShowDescription] = React.useState(false);

  const addAmount = () => {
    if (amount < parseInt(selectSize.amount) - parseInt(selectSize.s_amount)) {
      setAmount(amount + 1);
    }
  };

  const deAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  useEffect(() => {
    setColor(productDetail?.color[0].name);
    setSize(productDetail?.color[0].size);
    setSelectSize(productDetail?.color[0].size[0]);
    setPrice(productDetail?.color[0].size[0].price);
    setPPrice(productDetail?.color[0].size[0].p_price);
    setThumbnailChildren(productDetail?.thumbnail_children);
    dispatch(GetProductCategory(productDetail?.category));
  }, [productDetail, location.state.id]);

  useEffect(() => {
    dispatch(GetProduct(location.state.id));
  }, [postComment, location.state.id]);
  useEffect(() => {
    dispatch(GetProduct(location.state.id));
  }, [isPutComment]);

  console.log(productCategoryList, 'productCategoryList');

  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open, type) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const Account = (anchor) => (
    <Box
      sx={{ width: 320 }}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <AccountDraw />
    </Box>
  );

  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(productDetail?.comment?.length / PER_PAGE);
  const _DATA = usePagination(
    productDetail?.comment ? productDetail?.comment : [],
    PER_PAGE,
  );
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
    // toTop();
  };
  return (
    <Layout>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false, null)}
      >
        {Account('right')}
      </Drawer>
      <Breadcrumb
        sub="Home"
        sub1="Category"
        sub2="Nike"
        sub3="Giay nile leo nui"
      />
      <Box pt={4} className={classes.container_category}>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Box
              className={classNames(
                classes.container_category_slider,
                'slidercategory',
              )}
            >
              <Box className="arrow-slider-hover-category">
                <Box
                  className="arrow-slider-category"
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    className={classNames(
                      classes.prevSlide,
                      'nextArrowCategory',
                    )}
                    onClick={() => gotoPrev()}
                  >
                    <ArrowBackIosNew sx={{ fontSize: 14 }} />
                  </Box>
                  <Box
                    className={classNames(
                      classes.prevSlide,
                      'prevArrowCategory',
                    )}
                    onClick={() => gotoNext()}
                  >
                    <ArrowForwardIos sx={{ fontSize: 14 }} />
                  </Box>
                </Box>
              </Box>
              <Slider {...sliderSettings} ref={customeSlider}>
                {thumbnailChildren?.map((item) => {
                  return (
                    <Box px={1.25}>
                      <Box className={classes.container_item_voucher}>
                        <img
                          style={{
                            width: '100%',
                            width: '100%',
                            borderRadius: 16,
                          }}
                          src={item.thumbnail}
                        />
                        <Box className={classes.pos_utils}>
                          <Box className={classes.percent_item}>
                            <Typography variant="body1" color="text.white">
                              30%
                            </Typography>
                          </Box>
                          <Box className={classes.status_item}>
                            <Typography variant="body1" color="text.white">
                              New
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Slider>
            </Box>
          </Box>
          <Box className={classes.content_product_detail}>
            <Typography
              sx={{
                fontSize: 32,
                color: colors.black,
                lineHeight: '46px',
                marginBottom: 2.5,
              }}
            >
              {productDetail?.name}
            </Typography>
            <Box mb={3} display="flex" alignItems="flex-end">
              <Typography
                sx={{
                  fontSize: 20,
                  color: colors.darkGray4,
                  textDecoration: 'line-through',
                  marginRight: 1,
                }}
              >
                {location.state.p_price
                  ? parseInt(location.state.p_price) + parseInt(pprice)
                  : pprice}
              </Typography>
              <Typography
                sx={{
                  fontSize: 30,
                  color: colors.black,
                  lineHeight: '25px',
                  marginRight: 1,
                }}
              >
                {location.state.p_price
                  ? parseInt(price) - parseInt(location.state.p_price)
                  : price}
              </Typography>
              <Box className={classes.percent_price}>
                <Typography variant="body1" color="text.secondary">
                  - {Math.round(parseInt(pprice) / parseInt(price)) * 100}%
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box mb={1} display="flex" alignItems="center">
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: colors.black,
                    marginRight: 1,
                    fontWeight: 'bold',
                  }}
                >
                  Brand:{' '}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: colors.darkGray,
                  }}
                >
                  {productDetail?.brand}
                </Typography>
              </Box>
              <Box mb={1} display="flex" alignItems="center">
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: colors.black,
                    marginRight: 1,
                    fontWeight: 'bold',
                  }}
                >
                  Code:
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: colors.darkGray,
                  }}
                >
                  {productDetail?.code}
                </Typography>
              </Box>
              <Box mb={1} display="flex" alignItems="center">
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: colors.black,
                    marginRight: 1,
                    fontWeight: 'bold',
                  }}
                >
                  Address:
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: colors.darkGray,
                  }}
                >
                  {productDetail?.affilateshop?.cityAddress}
                </Typography>
              </Box>
            </Box>
            <Box my={3} display="flex">
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 500,
                    textAlign: 'center',
                    lineHeight: '22px',
                  }}
                  color="text.secondary"
                >
                  {' '}
                  52
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
                  {' '}
                  Days
                </Typography>
              </Box>
              <Box className={classes.vertical_devider}></Box>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 500,
                    textAlign: 'center',
                    lineHeight: '22px',
                  }}
                  color="text.secondary"
                >
                  {' '}
                  52
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
                  {' '}
                  Hours
                </Typography>
              </Box>
              <Box className={classes.vertical_devider}></Box>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 500,
                    textAlign: 'center',
                    lineHeight: '22px',
                  }}
                  color="text.secondary"
                >
                  {' '}
                  52
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
                  {' '}
                  Min
                </Typography>
              </Box>
              <Box className={classes.vertical_devider}></Box>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 500,
                    textAlign: 'center',
                    lineHeight: '22px',
                  }}
                  color="text.secondary"
                >
                  {' '}
                  52
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
                  {' '}
                  Sec
                </Typography>
              </Box>
            </Box>

            <Box my={2} display="flex" alignItems="center">
              <Box className={classes.bx_title_color}>
                <Typography variant="subtitle2" sx={{ marginRight: 10 }}>
                  Color:
                </Typography>
              </Box>
              <Box className={classes.bx_select_color}>
                {productDetail?.color.map((item, idx) => {
                  return (
                    <Box
                      className={
                        selectColorIdx === idx
                          ? classes.bx_select_size_onclick
                          : classes.bx_select_size
                      }
                      onClick={() => handleColor(item, idx)}
                    >
                      <img
                        src={item.thumbnail}
                        className={classes.img_select_size}
                      />
                      <Box
                        className={classNames(
                          classes.box_tooltip,
                          'box_tooltip',
                        )}
                      >
                        <Typography variant="body1" color="text.white">
                          {item.name}
                        </Typography>
                        <Box className={classes.border_arrow_tooltip}></Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box my={2} display="flex" alignItems="center">
              <Box className={classes.bx_title_color}>
                <Typography variant="subtitle2" sx={{ marginRight: 10 }}>
                  Size:
                </Typography>
              </Box>

              <Box className={classes.bx_select_color}>
                {size?.map((item, idx) => {
                  return (
                    <Box
                      className={
                        selectSizeIdx === idx
                          ? classes.bx_select_item_onclick
                          : classes.bx_select_item
                      }
                      onClick={() => handleSize(item, idx)}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ color: colors.black }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box my={4} className={classes.box_btn_to_cart}>
              <Box py={2.5} display="flex" alignItems="center">
                <Box mr={3} className={classes.bx_change_amount}>
                  <Box
                    className={classes.box_item_change_amount}
                    onClick={() => deAmount()}
                  >
                    <Remove sx={{ fontSize: 24, color: colors.darkGray }} />
                  </Box>
                  <Box className={classes.box_amount}>
                    <Typography
                      variant="subtitle1"
                      sx={{ whiteSpace: 'nowrap' }}
                    >
                      {amount} / (
                      {parseInt(selectSize?.amount) -
                        parseInt(selectSize?.s_amount)}
                      )
                    </Typography>
                  </Box>
                  <Box
                    className={classes.box_item_change_amount}
                    onClick={() => addAmount()}
                  >
                    <Add sx={{ fontSize: 24, color: colors.darkGray }} />
                  </Box>
                </Box>
                <Box
                  mr={1}
                  className={classes.btn_add_to_cart}
                  onClick={() => postCart()}
                >
                  <AddShoppingCart
                    sx={{
                      fontSize: 24,
                      marginRight: '12px',
                      color: colors.white,
                    }}
                  />
                  <Typography variant="subtitle1" color="text.white">
                    Add to cart
                  </Typography>
                </Box>
                <Box className={classes.eye_item}>
                  <FavoriteBorderOutlined
                    sx={{ fontSize: 20, color: colors.darkGray2 }}
                    className="icon_eye"
                  />
                </Box>
                <Box className={classes.eye_item}>
                  <ScaleOutlined
                    sx={{ fontSize: 20, color: colors.darkGray2 }}
                    className="icon_eye"
                  />
                </Box>
              </Box>
            </Box>

            <Box
              mb={1}
              display="flex"
              alignItems="flex-end"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="flex-end">
                <Box display="flex" alignItems="center">
                  <Share
                    sx={{
                      fontSize: 16,
                      color: colors.darkGray2,
                      marginRight: '5px',
                    }}
                    className="icon_eye"
                  />
                  <Typography
                    variant="subtitle2"
                    sx={{ color: colors.darkGray4, marginRight: 2 }}
                  >
                    Share this:
                  </Typography>
                  <FacebookOutlined
                    sx={{
                      fontSize: 20,
                      color: colors.darkGray2,
                      marginRight: 1,
                    }}
                    className={classes.icon_share}
                  />
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  Size guide
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="flex-end">
              <Box display="flex" alignItems="center">
                <TurnedInNot
                  sx={{
                    fontSize: 16,
                    color: colors.darkGray2,
                    marginRight: '5px',
                  }}
                  className="icon_eye"
                />
                <Typography
                  variant="subtitle2"
                  sx={{ color: colors.darkGray4, marginRight: 2 }}
                >
                  Tags:
                </Typography>
                <Typography variant="subtitle2" sx={{ cursor: 'pointer' }}>
                  #Size guide
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box my={6} p={2} className={classes.container_expend_product}>
          <TabContext value={value} indicatorColor="secondary">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} indicatorColor="secondary">
                <Tab
                  label={t('product_detail.txt_info_product_tab')}
                  value="1"
                  // textColor={colors.orange}
                  indicatorColor={colors.orange}
                  className={classes.tab_style}
                  sx={{ color: colors.black }}
                />
                <Tab
                  label={`${t('product_detail.txt_rate_tab')} (123)`}
                  value="2"
                  className={classes.tab_style}
                  sx={{ color: colors.black }}
                />
                <Tab
                  label={`${t('product_detail.txt_commnet_tab')} (123)`}
                  value="3"
                  className={classes.tab_style}
                  sx={{ color: colors.black }}
                />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: 2 }}>
              <Box
                sx={{
                  height: showDescription ? 'fit-content' : 500,
                  overflow: showDescription ? 'none' : 'hidden',
                }}
              >
                {productDetail?.description.map((item, idx) => (
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ color: colors.darkGray3, marginBottom: '16px' }}
                    >
                      {item.body}
                    </Typography>
                    <img src={item.thumbnail} className={classes.img_des} />
                  </Box>
                ))}
              </Box>
              <Box pt={5}>
                <Box
                  className={classes.btn_show_description}
                  onClick={() => setShowDescription(!showDescription)}
                >
                  <Typography
                    variant="subtitle1"
                    color="text.white"
                    sx={{ marginRight: 0.5 }}
                  >
                    Show less
                  </Typography>
                  {showDescription ? (
                    <KeyboardArrowUp
                      sx={{ fontSize: 24, color: colors.white }}
                    />
                  ) : (
                    <KeyboardArrowDown
                      sx={{ fontSize: 24, color: colors.white }}
                    />
                  )}
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="2" sx={{ padding: 2 }}>
              <Box
                mb={3}
                className={classes.btn_to_login}
                onClick={toggleDrawer('right', true, 'account')}
              >
                <Typography variant="subtitle2" color="text.white">
                  Mua sản phẩm để đánh giá{' '}
                </Typography>
              </Box>
              {Array(3)
                .fill(1)
                .map((item) => {
                  return (
                    <Box mb={2} className={classes.bx_rate}>
                      <img
                        src="https://rubiktheme.com/demo/rb_mercado_demo/modules/rbthemefunction/views/img/author.png"
                        className={classes.img_rate}
                      />
                      <Box>
                        <Box display="flex" alignItems="center">
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 'bold', marginRight: 1 }}
                          >
                            John mr{' '}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 14,
                              color: colors.darkGray,
                              fontWeight: '100px !important',
                              fontStyle: 'italic',
                            }}
                          >
                            - 2022-03-20 19:10:28
                          </Typography>
                        </Box>
                        <Box className={classes.bx_star_rate}>
                          {Array(5)
                            .fill(1)
                            .map((item) => {
                              return (
                                <StarOutlined
                                  sx={{ fontSize: 14 }}
                                  className={classes.icon_star}
                                />
                              );
                            })}
                        </Box>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: colors.darkGray }}
                        >
                          The product is amazing.
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
            </TabPanel>
            <TabPanel value="3" sx={{ padding: 2 }}>
              {accountDetail ? (
                <ItemWritenCommentProduct
                  account={accountDetail}
                  product={productDetail && productDetail}
                />
              ) : (
                <Box mb={3} className={classes.btn_to_login}>
                  <Typography variant="subtitle2" color="text.white">
                    Must to login to review
                  </Typography>
                </Box>
              )}
              {_DATA.currentData().map((item, idx) => {
                return <ItemCommentProduct data={item} />;
              })}

              <Box className={classes.box_pagination_comment}>
                <Box></Box>
                <Pagination
                  color="secondary"
                  shape="rounded"
                  count={count}
                  page={page}
                  variant="outlined"
                  onChange={handleChangePage}
                />
              </Box>
            </TabPanel>
          </TabContext>
        </Box>

        <Box my={5}>
          <ListLikeSection
            title="Sản phẩm liên quan"
            data={productCategoryList && productCategoryList}
          />
        </Box>
        <Box my={5}>
          <ListLikeSection
            title="Sản phẩm đặc sắc"
            data={productList && productList}
          />
        </Box>
      </Box>
      <FooterV2 />
    </Layout>
  );
};

export default ProductDetailPageNew;
