import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../lib/colors';
import Slider from 'react-slick';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { GetVoucher, GetVoucherDate } from '../../redux/actions/vouchers';
import { PutAccountGiveVoucher } from '../../redux/actions/accounts';
import { GetBanners } from '../../redux/actions/banners';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import './style.css';
import classNames from 'classnames';
import BestSalerItem from './ItemProductNewBest';
import DealDayItem from './ItemProductNewBest';
import ItemProductFeatured from './ItemProductNewBest';
import { GetProducts } from '../../redux/actions/products';
import ItemProductNewBest from './ItemProductNewBest';
const BestNewSection = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customeSlider = useRef();

  function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  window.addEventListener('scroll', reveal);

  const { isPostOrder } = useSelector((state) => state.order);
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetProducts());
  }, [isPostOrder]);

  const [dataProduct, setDataProduct] = React.useState([]);
  useEffect(() => {
    if (productList) {
      setDataProduct([]);

      const productVitural = productList;

      productList.map((item, idx) => {
        if ((idx + 1) % 8 === 0) {
          const removed = productVitural.slice(idx + 1 - 8, idx + 1);
          setDataProduct((current) => [...current, [removed]]);
        }
      });
    }
  }, [productList]);

  return (
    <Box py={3} className={classNames(classes.container_deal_day, 'reveal')}>
      <Box className={classes.section_deal_day}>
        <Box className={classes.box_title}>
          <Typography
            variant="h1"
            sx={{ fontWeight: 500 }}
            className={classNames(classes.title_dealday, 'title_bestsale')}
          >
            Best Saler
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: colors.darkGray }}
            className={classes.show_all}
            onClick={() => navigate('/featured')}
          >
            View all
          </Typography>
        </Box>
        <Box pt={3}>
          <Box className={classNames(classes.container_banner, 'reveal')}>
            {Array(3)
              .fill(1)
              .map((item) => {
                return <ItemProductNewBest />;
              })}
          </Box>
        </Box>
      </Box>

      <Box className={classes.section_deal_day}>
        <Box className={classes.box_title}>
          <Typography
            variant="h1"
            sx={{ fontWeight: 500 }}
            className={classNames(classes.title_dealday, 'title_bestsale')}
          >
            New Product
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: colors.darkGray }}
            className={classes.show_all}
            onClick={() => navigate('/featured')}
          >
            View all
          </Typography>
        </Box>
        <Box pt={3}>
          <Box className={classNames(classes.container_banner, 'reveal')}>
            {Array(3)
              .fill(1)
              .map((item) => {
                return <ItemProductNewBest />;
              })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BestNewSection;
