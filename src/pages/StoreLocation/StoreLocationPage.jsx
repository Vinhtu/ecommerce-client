import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SlideHeader from '../../components/SlideHeader';
import Banner from '../../components/Banner';

import ProductItem from '../../components/ProductItem';
import ProductSaleItem from '../../components/ProductSaleItem';
import { useNavigate } from 'react-router-dom';

import BlogItem from '../../components/BlogItem';
import Layout from '../../components/Layout';
import BenefitItem from '../../components/BenefitItem';
import { GetProducts } from '../../redux/actions/products';
import {
  Box,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Pagination,
} from '@mui/material';
import colors from '../../lib/colors';
import useStyles from './styles';
import FormSupportEmail from '../../components/FormSupportEmail';
import ProductFlashare from '../../components/ProductFlashare';
import CategoryItem from '../../components/CategoryItem';
import { GetEventDate } from '../../redux/actions/events';
import ItemProductNew from '../../components/ItemProductNew';
import usePagination from '../../components/Pagination';
import GoogleMap from './GoogleMap';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const StoreLocationPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    dispatch(GetProducts());
  }, [dispatch]);

  let [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const count = Math.ceil(productList ? productList.length / PER_PAGE : 0);
  const _DATA = usePagination(productList ? productList : [], PER_PAGE);
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const handleChangePage = (e, p) => {
    setPage(p);
    _DATA.jump(p);
    toTop();
  };

  console.log(productList, 'prodcuctlist');
  return (
    <Layout>
      <Breadcrumb sub="Home" sub1="Store Location" />
      <Box className={classes.container_product}>
        <Box mb={3}>
          <Typography
            variant="h1"
            style={{ color: colors.gray, fontWeight: 100 }}
          >
            Google Location
          </Typography>
        </Box>
        <GoogleMap />
        <Box py={8} display="flex" justifyContent="center">
          <Box
            display="flex"
            justifyContent="center"
            mr={5}
            style={{ width: 250 }}
          >
            <Box mr={1}>
              <MailOutlineIcon sx={{ fontSize: 48 }} />
            </Box>
            <Box>
              <Typography
                variant="h3"
                style={{ color: colors.gray, fontWeight: 100 }}
              >
                Email Support
              </Typography>
              <Typography>support.connectfashion@gmail.com</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            mr={5}
            style={{ width: 250 }}
          >
            <Box mr={1}>
              <PhoneEnabledIcon sx={{ fontSize: 48 }} />
            </Box>
            <Box>
              <Typography
                variant="h3"
                style={{ color: colors.gray, fontWeight: 100 }}
              >
                Phone
              </Typography>
              <Typography>+84 3571 33 417</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            mr={5}
            style={{ width: 250 }}
          >
            <Box mr={1}>
              <FacebookIcon sx={{ fontSize: 48 }} />
            </Box>
            <Box>
              <Typography
                variant="h3"
                style={{ color: colors.gray, fontWeight: 100 }}
              >
                Facebook
              </Typography>
              <Typography>/connect.fashion</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default StoreLocationPage;
