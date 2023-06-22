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

const WishlistPage = () => {
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
      <Breadcrumb breadcrumb="Flashare" data="" />

      <Box className={classes.container_product}>
        <Box className={classes.body_grid_product}>
          {productList &&
            _DATA.currentData().map((item) => {
              return <ItemProductNew data={item} />;
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
    </Layout>
  );
};

export default WishlistPage;
