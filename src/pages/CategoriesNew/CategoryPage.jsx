import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import ProductItem from '../../components/ProductItem';
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
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import {
  GetProductCategory,
  GetProductCategoryFilter,
} from '../../redux/actions/products';
import { GetBrands } from '../../redux/actions/brands';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  Star,
  KeyboardArrowUp,
  StarOutlined,
  KeyboardArrowDown,
  FiberManualRecordOutlined,
} from '@mui/icons-material';
// import usePagination from '../../components/Pagination';

import ItemProduct from '../../components/ListLikeSection/ItemProduct';
import usePagination from '../../components/Pagination';
const address_utils = [
  { name: 'TP Hồ Chí Minh' },
  { name: 'Hà Nội' },
  { name: 'Đồng Nai' },
  { name: 'Lào Cai' },
  { name: 'Sơn La' },
  { name: 'Nghệ An' },
  { name: 'Đà Nẵng' },
  { name: 'Đồng Tháp' },
];

const rate_utils = [
  { name: '1 star' },
  { name: '2 star' },
  { name: '3 star' },
  { name: '4 star' },
  { name: '5 star' },
];

const options = [
  { value: 'Khong chon', label: 'Khong chon' },
  { value: 'Tu cao den thap', label: 'Tu cao den thap' },
  { value: 'Tu thap den cao', label: 'Tu thap den cao' },
  { value: 'Theo thoi gian', label: 'Theo thoi gian' },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // borderBottom: '1px dotted pink',
    color: colors.darkGray4,
    backgroundColor: state.isSelected ? colors.orange : colors.white,
    color: state.isSelected ? colors.white : colors.darkGray4,
    padding: 2,
    width: 200,
    paddingLeft: 8,
    borderRadius: 0,
    cursor: 'pointer',
  }),
  control: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
    display: 'flex',
    height: 40,
    border: '1px solid #CED4DA',
    alignItems: 'center',
    borderRadius: 0,
    zIndex: 9999999,
    color: state.isSelected ? colors.darkGray : colors.darkGray,
    backgroundColor: colors.white,
    cursor: 'pointer',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const CategoryPageNew = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();

  const valuetext = (value) => {
    if (value === 1) {
      return `${value}.000 VNĐ`;
    } else {
      return ` > ${value}.000.000 VNĐ`;
    }
  };
  const [currency, setCurrency] = React.useState('EUR');
  const [showBrand, setShowBrand] = React.useState(false);
  const [showAddress, setShowAddress] = React.useState(false);
  const [showDifferent, setShowDifferent] = React.useState(false);
  const { productCategoryList } = useSelector((state) => state.product);
  const { brandList } = useSelector((state) => state.brand);

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    dispatch(GetProductCategory(location.state.params));
    dispatch(GetBrands());
  }, [dispatch]);

  useEffect(() => {
    console.log('vo log');
    dispatch(GetProductCategory(location.state.params));
    dispatch(GetBrands());
  }, [location.state.params]);
  const [dataSearch, setDataSearch] = React.useState({
    category: location?.state?.params,
    brand: [],
    address: [],
    price: '',
    star: [],
    sort: '',
  });

  const handleChangeBrand = (e) => {
    if (e.target.checked) {
      let arrType = dataSearch.brand;
      arrType.push(e.target.name);
      setDataSearch({
        ...dataSearch,
        brand: arrType,
      });
      dispatch(GetProductCategoryFilter(dataSearch));
    } else {
      let filterType = dataSearch.brand.filter(
        (item) => item !== e.target.name,
      );
      setDataSearch({ ...dataSearch, brand: filterType });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
  };
  const handleChangeAddress = (e) => {
    if (e.target.checked) {
      let arrType = dataSearch.address;
      arrType.push(e.target.name);
      setDataSearch({
        ...dataSearch,
        address: arrType,
      });
      dispatch(GetProductCategoryFilter(dataSearch));
    } else {
      let filterType = dataSearch.address.filter(
        (item) => item !== e.target.name,
      );
      setDataSearch({ ...dataSearch, address: filterType });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
  };
  const handleChangeStar = (e) => {
    if (e.target.checked) {
      let arrType = dataSearch.star;
      arrType.push(e.target.name);
      setDataSearch({
        ...dataSearch,
        star: arrType,
      });
      dispatch(GetProductCategoryFilter(dataSearch));
    } else {
      let filterType = dataSearch.star.filter((item) => item !== e.target.name);
      setDataSearch({ ...dataSearch, star: filterType });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
  };
  const handleChangeSlider = (e, newValue, activeThumb) => {
    if (newValue === 1) {
      setDataSearch({ ...dataSearch, price: '1000' });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
    if (newValue === 3) {
      setDataSearch({ ...dataSearch, price: '3000000' });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
    if (newValue === 5) {
      setDataSearch({ ...dataSearch, price: '5000000' });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
    if (newValue === 7) {
      setDataSearch({ ...dataSearch, price: '7000000' });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
    if (newValue === 9) {
      setDataSearch({ ...dataSearch, price: '9000000' });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
    if (newValue === 11) {
      setDataSearch({ ...dataSearch, price: '11000000' });
      dispatch(GetProductCategoryFilter(dataSearch));
    }
  };

  const handleChangeSelect = (newValue) => {
    setDataSearch({ ...dataSearch, sort: newValue.value });
    dispatch(GetProductCategoryFilter(dataSearch));
  };

  console.log(productCategoryList, 'productCategoryList');

  const { t, i18n } = useTranslation();

  let [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const count = Math.ceil(productCategoryList?.length / PER_PAGE);
  const _DATA = usePagination(
    productCategoryList ? productCategoryList : [],
    PER_PAGE,
  );
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
    toTop();
  };
  return (
    <Layout>
      <Breadcrumb sub="Home" sub1="Nike" />

      <Box className={classes.container_category}>
        <Box className={classes.container_option}>
          <Box mb={3} className={classes.section_option_brand}>
            <Box className={classes.header_option}>
              <Typography variant="subtitle1" color="text.white">
                Brand
              </Typography>
            </Box>
            <Box pt={2} px={2}>
              {Array(5)
                .fill(1)
                .map((item) => {
                  return (
                    <Box
                      pb={2}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ cursor: 'pointer' }}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        sx={{ cursor: 'pointer' }}
                      >
                        <FiberManualRecordOutlined
                          sx={{ fontSize: 10, marginRight: 1 }}
                        />
                        <Typography variant="subtitle2">
                          Computer & Laptop{' '}
                        </Typography>
                      </Box>
                      {/* <Add sx={{ fontSize: 14, fontWeight: 'bold' }} /> */}
                    </Box>
                  );
                })}
            </Box>
          </Box>

          <Box mb={3} className={classes.section_option_brand}>
            <Box className={classes.header_option}>
              <Typography variant="subtitle1" color="text.white">
                Filter
              </Typography>
            </Box>
            <Box px={2}>
              <Accordion
                sx={{ boxShadow: 0, borderTop: 0 }}
                className={classes.accordion_container}
              >
                <AccordionSummary
                  sx={{
                    padding: 0,
                    border: 0,
                    boxShadow: 'none',
                    marginTop: 0,
                    borderBottom: `1px solid ${colors.darkGray2}`,
                  }}
                  expandIcon={
                    <ExpandMoreIcon sx={{ fontSize: 16, fontWeight: 'bold' }} />
                  }
                  className={classes.accordion_item}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold', marginTop: 0 }}
                  >
                    Brand
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '16px 11px 0px 11px' }}>
                  {Array(5)
                    .fill(1)
                    .map((item) => (
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        // alignItems="center"
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="20px"
                              sx={{
                                fontSize: 20,
                                width: 20,
                                height: 20,
                                color: colors.darkGray,
                                '&.Mui-checked': {
                                  color: colors.orange,
                                },
                                marginRight: 1,
                              }}
                              className={classes.checkbox_filter}
                              name="Nike"
                              // onChange={(e) => ha
                              // ndleChangeBrand(e)}
                            />
                          }
                          sx={{ marginBottom: '12px', fontSize: 14 }}
                          label="Desktop"
                        />
                        <Typography variant="subtitle2">(9)</Typography>
                      </Box>
                    ))}
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{ boxShadow: 0, borderTop: 0 }}
                className={classes.accordion_container}
              >
                <AccordionSummary
                  sx={{
                    padding: 0,
                    border: 0,
                    boxShadow: 'none',
                    marginTop: 0,
                    borderBottom: `1px solid ${colors.darkGray2}`,
                  }}
                  expandIcon={
                    <ExpandMoreIcon sx={{ fontSize: 16, fontWeight: 'bold' }} />
                  }
                  className={classes.accordion_item}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold', marginTop: 0 }}
                  >
                    Color
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '16px 11px 0px 11px' }}>
                  {Array(5)
                    .fill(1)
                    .map((item) => (
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        // alignItems="center"
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="20px"
                              sx={{
                                fontSize: 20,
                                width: 20,
                                height: 20,
                                color: colors.darkGray,
                                '&.Mui-checked': {
                                  color: colors.orange,
                                },
                                marginRight: 1,
                              }}
                              className={classes.checkbox_filter}
                              name="Nike"
                              // onChange={(e) => ha
                              // ndleChangeBrand(e)}
                            />
                          }
                          sx={{ marginBottom: '12px', fontSize: 14 }}
                          label="Desktop"
                        />
                        <Typography variant="subtitle2">(9)</Typography>
                      </Box>
                    ))}
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{ boxShadow: 0, borderTop: 0 }}
                className={classes.accordion_container}
              >
                <AccordionSummary
                  sx={{
                    padding: 0,
                    border: 0,
                    boxShadow: 'none',
                    marginTop: 0,
                    borderBottom: `1px solid ${colors.darkGray2}`,
                  }}
                  expandIcon={
                    <ExpandMoreIcon sx={{ fontSize: 16, fontWeight: 'bold' }} />
                  }
                  className={classes.accordion_item}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold', marginTop: 0 }}
                  >
                    Size
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '16px 11px 0px 11px' }}>
                  {Array(5)
                    .fill(1)
                    .map((item) => (
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        // alignItems="center"
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="20px"
                              sx={{
                                fontSize: 20,
                                width: 20,
                                height: 20,
                                color: colors.darkGray,
                                '&.Mui-checked': {
                                  color: colors.orange,
                                },
                                marginRight: 1,
                              }}
                              className={classes.checkbox_filter}
                              name="Nike"
                              // onChange={(e) => ha
                              // ndleChangeBrand(e)}
                            />
                          }
                          sx={{ marginBottom: '12px', fontSize: 14 }}
                          label="Desktop"
                        />
                        <Typography variant="subtitle2">(9)</Typography>
                      </Box>
                    ))}
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{ boxShadow: 0, borderTop: 0 }}
                className={classes.accordion_container}
              >
                <AccordionSummary
                  sx={{
                    padding: 0,
                    border: 0,
                    boxShadow: 'none',
                    marginTop: 0,
                    borderBottom: `1px solid ${colors.darkGray2}`,
                  }}
                  expandIcon={
                    <ExpandMoreIcon sx={{ fontSize: 16, fontWeight: 'bold' }} />
                  }
                  className={classes.accordion_item}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold', marginTop: 0 }}
                  >
                    Price
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '16px 0px 0px 0px' }}>
                  <Slider
                    aria-label="Temperature"
                    defaultValue={2}
                    // getAriaValueText={(e) => valuetext(e)}
                    valueLabelFormat={(e) => valuetext(e)}
                    valueLabelDisplay="auto"
                    onChange={handleChangeSlider}
                    step={2}
                    marks
                    min={1}
                    max={11}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{ boxShadow: 0, borderTop: 0 }}
                className={classes.accordion_container}
              >
                <AccordionSummary
                  sx={{
                    padding: 0,
                    border: 0,
                    boxShadow: 'none',
                    marginTop: 0,
                    borderBottom: `0px`,
                  }}
                  expandIcon={
                    <ExpandMoreIcon sx={{ fontSize: 16, fontWeight: 'bold' }} />
                  }
                  className={classes.accordion_item_address}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 'bold', marginTop: 0 }}
                  >
                    Address
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ padding: '16px 11px 16px 11px' }}>
                  {Array(5)
                    .fill(1)
                    .map((item) => (
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        // alignItems="center"
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              size="20px"
                              sx={{
                                fontSize: 20,
                                width: 20,
                                height: 20,
                                color: colors.darkGray,
                                '&.Mui-checked': {
                                  color: colors.orange,
                                },
                                marginRight: 1,
                              }}
                              className={classes.checkbox_filter}
                              name="Nike"
                              // onChange={(e) => ha
                              // ndleChangeBrand(e)}
                            />
                          }
                          sx={{ marginBottom: '12px', fontSize: 14 }}
                          label="Desktop"
                        />
                        <Typography variant="subtitle2">(9)</Typography>
                      </Box>
                    ))}
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>

          <Box mb={3} className={classes.section_option_brand}>
            <Box className={classes.header_option}>
              <Typography variant="subtitle1" color="text.white">
                Product orther
              </Typography>
            </Box>
            <Box pt={2} px={2}>
              {Array(5)
                .fill(1)
                .map((item) => {
                  return (
                    <Box>
                      <Box
                        mb={2}
                        display="flex"
                        justifyContent="space-between"
                        sx={{ cursor: 'pointer' }}
                        className={classes.item_list_option_product}
                      >
                        <img
                          src="https://rubiktheme.com/demo/rb_mercado_demo/26-home_default/hummingbird-printed-t-shirt.jpg"
                          className={classes.img_item_option_product}
                        />
                        <Box>
                          <Typography variant="subtitle1">
                            Samsung Galaxy S21 Dua
                          </Typography>
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

                          <Typography variant="h2" color="text.secondary">
                            $18
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={classes.horizontal_devider}></Box>
                    </Box>
                  );
                })}
            </Box>
          </Box>
        </Box>
        <Box className={classes.container_body}>
          <Box className={classes.item_banner_header}>
            <Box className={classes.box_img_banner}>
              <img
                src="https://rubiktheme.com/demo/rb_mercado_demo/c/3-category_default/computers-laptops.jpg"
                className={classes.img_banner}
              />
            </Box>
            <Box mb={0.5}>
              <Typography variant="h2">Computers & Laptops</Typography>
            </Box>
            <Box>
              <Typography variant="subtiltle2">
                Discover our favorites fashionable discoveries, a selection of
              </Typography>
            </Box>
          </Box>
          <Box py={2}>
            <Box className={classes.bx_select}>
              <Typography variant="h3" sx={{ fontWeight: 500 }}>
                Nike
              </Typography>
              <Select
                options={options}
                styles={customStyles}
                // onChange={(e) => handleChangeSelect(e)}
                placeholder={`${t('category.placeholder_sort')}`}
              />
            </Box>
          </Box>
          <Box className={classes.horizontal_devider}></Box>
          <Box py={2} className={classes.section_product}>
            {_DATA.currentData().map((item) => {
              return <ItemProduct data={item} />;
            })}
          </Box>
          <Box className={classes.box_pagination_comment}>
            <Pagination
              color="secondary"
              shape="rounded"
              count={count}
              page={page}
              variant="outlined"
              onChange={handleChangePage}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default CategoryPageNew;
