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
import BestSalerItem from './ItemProductFeatured';
import DealDayItem from './ItemProductFeatured';
import ItemProductFeatured from './ItemProductFeatured';
import { GetProducts } from '../../redux/actions/products';
const FeaturedSection = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customeSlider = useRef();

  const [sliderSettings, setSliderSettings] = useState({
    fade: false,
    infinite: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    className: 'sliderfeature',
  });

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

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
      <Box mr={2.5} className={classes.container_item_banner}>
        <Box className={classNames(classes.item_banner, 'item_banner')}>
          <img
            src="https://cdn.shopify.com/s/files/1/0603/7232/0427/files/mercado_mercado_banner380x824.jpg?v=1640567608"
            className={classNames(classes.img_banner, 'img_banner')}
          />
        </Box>
      </Box>

      <Box className={classes.section_deal_day}>
        <Box className={classes.box_title}>
          <Typography
            variant="h1"
            sx={{ fontWeight: 500 }}
            className={classNames(classes.title_dealday, 'title_bestsale')}
          >
            Featured
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
          <Box
            className={classNames(
              classes.container_banner,
              'reveal',
              'sliderfeature',
            )}
          >
            <Box className="arrow-feature-hover">
              <Box
                className="arrow-dealday"
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  className={classNames(classes.prevSlide, 'prevArrowDealday')}
                  onClick={() => gotoPrev()}
                >
                  <ArrowBackIosNew sx={{ fontSize: 14 }} />
                </Box>
                <Box
                  className={classNames(classes.prevSlide, 'nextArrowDealday')}
                  onClick={() => gotoNext()}
                >
                  <ArrowForwardIos sx={{ fontSize: 14 }} />
                </Box>
              </Box>
            </Box>
            <Slider {...sliderSettings} ref={customeSlider}>
              {dataProduct?.map((item) => {
                return (
                  <Box className={classes.bx_dealday}>
                    {item[0].map((item) => {
                      return <ItemProductFeatured data={item} />;
                    })}
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedSection;
