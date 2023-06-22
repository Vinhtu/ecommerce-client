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
import BestSalerItem from './ItemProduct';
import DealDayItem from './ItemProduct';
import ItemProductFeatured from './ItemProduct';
import ItemProduct from './ItemProduct';
const ListLikeSection = (props) => {
  const classes = useStyles();

  const customeSlider = useRef();

  const [sliderSettings, setSliderSettings] = useState({
    fade: false,
    infinite: true,

    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    className: 'sliderlistlike',
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

  return (
    <Box py={3} className={classNames(classes.container_deal_day, 'reveal')}>
      <Box className={classes.section_deal_day}>
        <Box className={classes.box_title}>
          <Typography
            variant="h1"
            sx={{ fontWeight: 500 }}
            className={classNames(classes.title_dealday, 'title_bestsale')}
          >
            {props?.title}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: colors.darkGray }}
            className={classes.show_all}
          >
            View all
          </Typography>
        </Box>
        <Box pt={3}>
          <Box
            className={classNames(
              classes.container_banner,
              'reveal',
              'sliderlistlike',
            )}
          >
            <Box className="arrow-listlike-hover">
              <Box
                className="arrow-listlike"
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  className={classNames(classes.prevSlide, 'prevArrowListLike')}
                  onClick={() => gotoPrev()}
                >
                  <ArrowBackIosNew sx={{ fontSize: 14 }} />
                </Box>
                <Box
                  className={classNames(classes.prevSlide, 'nextArrowListLike')}
                  onClick={() => gotoNext()}
                >
                  <ArrowForwardIos sx={{ fontSize: 14 }} />
                </Box>
              </Box>
            </Box>
            <Slider {...sliderSettings} ref={customeSlider}>
              {props?.data?.map((item) => {
                return (
                  <Box px={1.25}>
                    <ItemProduct data={item} />
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

export default ListLikeSection;
