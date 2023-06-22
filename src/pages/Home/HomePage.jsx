import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import SlideHeader from '../../components/SlideHeader';
import Banner from '../../components/Banner';

import ProductItem from '../../components/ProductItem';
import ProductSaleItem from '../../components/ProductSaleItem';

import BlogItem from '../../components/BlogItem';
import Layout from '../../components/Layout';
import BenefitItem from '../../components/BenefitItem';
import { GetProducts, GetProductTopSale } from '../../redux/actions/products';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import colors from '../../lib/colors';
import useStyles from './styles';
import FormSupportEmail from '../../components/FormSupportEmail';
import ProductFlashare from '../../components/ProductFlashare';
import CategoryItem from '../../components/CategoryItem';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GetCategorys } from '../../redux/actions/categorys';
import { GetEventDate } from '../../redux/actions/events';
import RuleWord from '../../components/RuleWork';
import SlideVoucher from '../../components/SlideVoucher';
import BannerFist from '../../components/BannerExpend/BannerFist';
import BestSalerItem from '../../components/BestSalerSection/BestSaleItem';
import BestSalerSection from '../../components/BestSalerSection';
import BannerSecond from '../../components/BannerExpend/BannerSecond';
import DealDaySection from '../../components/DealDaySection';
import BannerTree from '../../components/BannerExpend/BannerTree';
import FeaturedSection from '../../components/FeaturedSection';
import FooterV2 from '../../components/FooterV2';
import FooterV3 from '../../components/FooterV3';
import CategoryUtilItem from '../../components/CategoryUtilItem';
import BestNewSection from '../../components/BestNewSection';

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [key, setKey] = useState('All');

  const [dataCategory, setDataCategory] = React.useState([]);

  const [timeline, setTimeLine] = React.useState(true);

  const { categoryList } = useSelector((state) => state.category);
  const { productList } = useSelector((state) => state.product);
  const { productTopSale } = useSelector((state) => state.product);
  const { eventDetail } = useSelector((state) => state.event);
  const [arrivalMessage, setArrivalMessage] = React.useState([]);

  useEffect(() => {
    dispatch(GetCategorys());
    dispatch(GetProducts());
    dispatch(GetProductTopSale());
    dispatch(GetEventDate(new Date()));
  }, [dispatch]);

  const toFlashare = () => {
    navigate('/flashare');
  };
  const toTopSale = () => {
    navigate('/top-sale');
  };

  const { t, i18n } = useTranslation();

  const validateCategory = () => {
    if (categoryList && productList) {
      if (dataCategory.length === 0) {
        for (let i = 0; i < categoryList.data.results.length; i += 1) {
          let arrProduct = [];
          for (let p = 0; p < productList.length; p += 1) {
            if (categoryList.data.results[i].name === productList[p].category) {
              arrProduct.push(productList[p]);
            }
            if (p === productList.length - 1) {
              setDataCategory((current) => [
                ...current,
                {
                  category: categoryList.data.results[i].name,
                  product: arrProduct,
                  amount: arrProduct.length,
                },
              ]);
            }
          }
        }
      }
    }
  };

  validateCategory();

  const countdown = () => {
    if (eventDetail && eventDetail.length > 0) {
      const date_ends = new Date(
        `${eventDetail && eventDetail[0].date_end}`,
      ).getTime();

      const now = new Date().getTime();
      const gap = date_ends - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);

      document.getElementById('date') &&
        (document.getElementById('date').innerText = textDay);
      document.getElementById('hour') &&
        (document.getElementById('hour').innerText = textHour);
      document.getElementById('minute') &&
        (document.getElementById('minute').innerText = textMinute);
      document.getElementById('second') &&
        (document.getElementById('second').innerText = textSecond);

      if (textDay < 0 && textHour < 0 && textMinute < 0 && textSecond < 0) {
        setTimeLine(false);
      } else {
        setTimeLine(true);
      }
    }
  };

  setInterval(countdown, 1000);

  useEffect(() => {
    if (!eventDetail || !(eventDetail.length > 0)) {
      setTimeLine(false);
    }
  });

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener('online', handleStatusChange);

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange);

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);

  if (!isOnline) {
    return (
      <Box>
        <Typography variant="subtitle1">Khong co internet</Typography>
      </Box>
    );
  }
  return (
    <Layout>
      <SlideHeader />
      {/* <RuleWord /> */}

      <CategoryUtilItem />
      <BestSalerSection />

      <BannerFist />

      {/* <Box py={3}></Box> */}
      {/* <BannerSecond /> */}
      <DealDaySection />
      <BannerTree />
      <BestNewSection />
      <SlideVoucher />

      <FeaturedSection />
      <FooterV2 />
    </Layout>
  );
};

export default HomePage;
