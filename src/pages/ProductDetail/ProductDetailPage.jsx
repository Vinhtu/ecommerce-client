import React, { useState, useEffect } from 'react';
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
import { Star } from '@mui/icons-material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './style.css';

import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Pagination,
} from '@mui/material';

import useStyles from './styles';
import ItemDescriptionProduct from '../../components/ItemDescriptionProduct';
import ItemCommentProduct from '../../components/ItemCommentProduct';
import ProductSaleItem from '../../components/ProductSaleItem';
import SidebarPostItem from '../../components/SidebarPostItem';
import RightSidebar from '../../components/RightSidebar';
import { useTranslation } from 'react-i18next';
import { GetProduct, GetProductCategory } from '../../redux/actions/products';
import ItemRateProduct from '../../components/ItemRateProduct';
import ItemWritenCommentProduct from '../../components/ItemWritenCommentProduct';
import { GetAccount } from '../../redux/actions/accounts';
import { setNote } from '../../redux/actions/utils';
import ConvertVND from '../../components/ConvertMoney/ConvertVND';
const ProductDetailPage = () => {
  const classes = useStyles();

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
    dispatch(GetProduct(location.state.id));
    if (token) {
      dispatch(GetAccount(account_id, token));
    }
  }, [dispatch]);

  const [key, setKey] = useState('Description');
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            style={{ width: 100, height: 100 }}
            src={
              productDetail && productDetail?.thumbnail_children[i].thumbnail
            }
          />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb slick-dot-img',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [color, setColor] = React.useState(productDetail?.color[0].name);
  const [size, setSize] = React.useState(productDetail?.color[0].size);
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

    dispatch(PostCart(data, token));
    // dispatch(setNote(true, 'isPostCart'));

    setAmount(1);
  };
  const [value, setValue] = React.useState('1');

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const [showDescription, setShowDescription] = React.useState(false);
  const { t, i18n } = useTranslation();

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

  useEffect(() => {}, [dispatch]);

  useEffect(() => {
    setColor(productDetail?.color[0].name);
    setSize(productDetail?.color[0].size);
    setSelectSize(productDetail?.color[0].size[0]);
    setPrice(productDetail?.color[0].size[0].price);
    setPPrice(productDetail?.color[0].size[0].p_price);
    dispatch(GetProductCategory(productDetail?.category));
  }, [productDetail]);

  useEffect(() => {
    dispatch(GetProduct(location.state.id));
  }, [postComment]);
  useEffect(() => {
    dispatch(GetProduct(location.state.id));
  }, [isPutComment]);

  useEffect(() => {
    dispatch(GetProductCategory(productDetail?.category));
  }, [dispatch, productDetail]);

  console.log(productCategoryList, 'productCategoryList');
  return (
    <Layout>
      <Breadcrumb
        breadcrumb="Signle Product"
        data={productDetail && productDetail}
      />
      <Box className={classes.container_product_detail}>
        <Box className={classes.container_main_product}>
          <Box sx={{ width: '85%' }}>
            <Box sx={{ display: 'flex' }}>
              <Box className={classes.left_product_detail}>
                <Slider {...settings}>
                  {productDetail?.thumbnail_children.map((item) => {
                    return (
                      <div style={{ display: 'flex', height: 600 }}>
                        <img src={item.thumbnail} style={{ height: 600 }} />
                      </div>
                    );
                  })}
                </Slider>
              </Box>
              <Box className={classes.right_product_detail}>
                <Typography
                  variant="body1"
                  className={classes.txt_tag_product}
                  sx={{ marginBottom: 2 }}
                >
                  {t('product_detail.txt_tags')} : ban nhieu nhat
                </Typography>
                <Typography
                  variant="h2"
                  className={classes.txt_name_product}
                  sx={{ marginBottom: 1 }}
                >
                  {productDetail?.name}
                </Typography>
                <Box className={classes.box_rate}>
                  <Box className={classes.box_rate_icon}>
                    {Array(5)
                      .fill(1)
                      .map((item) => (
                        <Star
                          className={classes.rate_icon}
                          size={{ fontSize: 14 }}
                        />
                      ))}
                  </Box>
                  <Typography sx={{ marginRight: 2 }}>
                    ({productDetail?.comment.length}{' '}
                    {t('product_detail.txt_rate')})
                  </Typography>
                  <Typography sx={{ marginRight: 2 }}>
                    ({productDetail?.comment.length}{' '}
                    {t('product_detail.txt_cmt')})
                  </Typography>
                </Box>
                <Box className={classes.box_price}>
                  <Typography
                    variant="h1"
                    className={classes.main_price}
                    sx={{ marginRight: 2 }}
                  >
                    {location.state.p_price
                      ? ConvertVND(
                          parseInt(price) - parseInt(location.state.p_price),
                        )
                      : ConvertVND(price)}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={classes.promotion_price}
                    sx={{ marginRight: 2 }}
                  >
                    {location.state.p_price
                      ? ConvertVND(
                          parseInt(location.state.p_price) + parseInt(pprice),
                        )
                      : ConvertVND(pprice)}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className={classes.percent_promotion_price}
                  >
                    {Math.round(parseInt(pprice) / parseInt(price))} %
                  </Typography>
                </Box>
                <Typography variant="subtitle2">
                  {t('product_detail.brand')}:{productDetail?.brand}
                </Typography>
                <Typography variant="subtitle2">
                  {t('product_detail.code')}: {productDetail?.code}
                </Typography>
                <Typography variant="subtitle2">
                  {t('product_detail.address')}: {productDetail?.address}
                </Typography>
                {/* <Box className={classes.vertical_devider_product_detail}></Box> */}
                {/* <Typography variant="subtitle1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas consectetur inventore voluptatem dignissimos nemo
                  repellendus est, harum maiores veritatis quidem.
                </Typography> */}
                <Box className={classes.vertical_devider_product_detail}></Box>

                <Box className={classes.box_color}>
                  <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                    {t('product_detail.color')}: {color}
                  </Typography>
                  <Box sx={{ display: 'flex' }}>
                    {productDetail?.color.map((item, idx) => {
                      return (
                        <div
                          onClick={() => handleColor(item, idx)}
                          style={
                            selectColorIdx === idx
                              ? {
                                  border: '1px solid',
                                  borderColor: colors.orange,
                                  borderRadius: 4,
                                  marginRight: 4,
                                }
                              : { borderRadius: 4, marginRight: 4 }
                          }
                        >
                          <img
                            style={{
                              width: 32,
                              height: 32,
                              marginRight: 4,
                              cursor: 'pointer',
                              borderRadius: 4,
                            }}
                            src={item.thumbnail}
                          />
                        </div>
                      );
                    })}
                  </Box>
                </Box>

                <Box className={classes.box_size}>
                  <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                    {t('product_detail.size')} :{' '}
                  </Typography>
                  <Box sx={{ display: 'flex' }}>
                    {size?.map((item, idx) => (
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          border: '1px solid',
                          borderColor:
                            selectSizeIdx === idx ? colors.orange : 'gray',
                          borderRadius: 4,
                          marginRight: 4,
                          cursor: 'pointer',
                        }}
                        onClick={() => handleSize(item, idx)}
                      >
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </Box>
                </Box>
                <Box className={classes.box_amount}>
                  <Typography variant="subtitle2" sx={{ marginBottom: 1 }}>
                    {t('product_detail.amount')}: (
                    {parseInt(selectSize?.amount) -
                      parseInt(selectSize?.s_amount)}{' '}
                    {t('product_detail.amount_remain')})
                  </Typography>
                  <Box className={classes.container_amount}>
                    <Box
                      className={classes.btn_reduce_amount}
                      onClick={() => deAmount()}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ color: colors.gray }}
                      >
                        -
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ marginLeft: 1, marginRight: 1 }}
                    >
                      {amount}
                    </Typography>
                    <Box
                      className={classes.btn_increase_amount}
                      onClick={() => addAmount()}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ color: colors.gray }}
                      >
                        +
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.box_btn_product}>
                  {/* <Box className={classes.btn_buy_product}>
                
                    {t('product_detail.btn_buy_now')}
                  </Box> */}
                  <Box
                    className={classes.btn_add_cart_product}
                    onClick={() => postCart()}
                  >
                    {/* <Typography
                  variant="subtitle1"
                  className={classes.txt_btn_active_producct}
                > */}
                    {t('product_detail.btn_add_to_cart')}
                    {/* </Typography> */}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.container_tab_product_detail}>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab
                        label={t('product_detail.txt_info_product_tab')}
                        value="1"
                        sx={{ color: colors.black, textTransform: 'none' }}
                      />
                      <Tab
                        label={`${t('product_detail.txt_rate_tab')} (123)`}
                        value="2"
                        sx={{ color: colors.black, textTransform: 'none' }}
                      />
                      <Tab
                        label={`${t('product_detail.txt_commnet_tab')} (123)`}
                        value="3"
                        sx={{ color: colors.black, textTransform: 'none' }}
                      />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <Box
                      sx={{
                        height: showDescription ? '100%' : 500,
                        overflow: showDescription ? 'none' : 'hidden',
                      }}
                    >
                      {productDetail?.description.map((item, idx) => (
                        <ItemDescriptionProduct data={item} />
                      ))}
                    </Box>
                    <Box className={classes.container_btn_show_description}>
                      <Box
                        className={classes.btn_show_description}
                        onClick={() => setShowDescription(!showDescription)}
                      >
                        {' '}
                        <Typography variant="subtitle1" color="text.success">
                          {showDescription
                            ? `${t('product_detail.txt_hiddent_info_product')}`
                            : `${t(
                                'product_detail.txt_show_all_info_product',
                              )}`}
                        </Typography>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel value="2">
                    <ItemRateProduct />
                    <ItemRateProduct />
                    <ItemRateProduct />
                    <Box className={classes.box_pagination_comment}>
                      <Pagination
                        count={10}
                        variant="outlined"
                        color="secondary"
                        shape="rounded"
                      />
                    </Box>
                  </TabPanel>
                  <TabPanel value="3">
                    {' '}
                    {accountDetail ? (
                      <ItemWritenCommentProduct
                        account={accountDetail}
                        product={productDetail && productDetail}
                      />
                    ) : (
                      'Dang nhap de binh luan'
                    )}
                    {productDetail?.comment.map((item, idx) => {
                      return <ItemCommentProduct data={item} />;
                    })}
                    <Box className={classes.box_pagination_comment}>
                      <Pagination
                        count={10}
                        variant="outlined"
                        color="secondary"
                        shape="rounded"
                      />
                    </Box>
                  </TabPanel>
                </TabContext>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: '14%' }}>
            <RightSidebar />
          </Box>
        </Box>

        <Box className={classes.container_product}>
          <Typography variant="h1" sx={{ marginBottom: 2 }}>
            {t('product_detail.txt_best_saler')}
          </Typography>
          <Box className={classes.body_grid_product}>
            {productTopSale && productTopSale}
            {productCategoryList &&
              productCategoryList.map((item, idx) => (
                <ProductItem data={item} />
              ))}
          </Box>
          <Box className={classes.container_btn_show_product}>
            <Box className={classes.btn_show_product}>
              <Typography
                variant="subtitle1"
                color="text.success"
                className={classes.text_show_product}
              >
                {t('product_detail.txt_show_all_best_saler')}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default ProductDetailPage;
