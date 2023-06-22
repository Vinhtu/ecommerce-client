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
import BestSalerItem from './DealDayItem';
import DealDayItem from './DealDayItem';
import { GetProducts, GetProductTopSale } from '../../redux/actions/products';
import { useTranslation } from 'react-i18next';

import { GetCategorys } from '../../redux/actions/categorys';
import { GetEventDate } from '../../redux/actions/events';
const DealDaySection = (props) => {
  const classes = useStyles();

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
    className: 'sliderdealday',
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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [key, setKey] = useState('All');

  const [dataCategory, setDataCategory] = React.useState([]);

  const [timeline, setTimeLine] = React.useState(true);

  const { isPostOrder } = useSelector((state) => state.order);

  const { categoryList } = useSelector((state) => state.category);
  const { productList } = useSelector((state) => state.product);
  const { productTopSale } = useSelector((state) => state.product);
  const { eventDetail } = useSelector((state) => state.event);
  const [arrivalMessage, setArrivalMessage] = React.useState([]);

  const [dataEvent, setDataEvent] = React.useState([]);

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

  useEffect(() => {
    dispatch(GetProducts());
  }, [isPostOrder]);
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
  useEffect(() => {
    if (eventDetail) {
      setDataEvent([]);

      const eventVitural = eventDetail[0]?.eventitem;

      eventDetail[0]?.eventitem.map((item, idx) => {
        console.log(idx, 'idx');
        if ((idx + 1) % 4 === 0) {
          console.log(idx, 'idx iii');
          const removed = eventVitural.slice(idx + 1 - 4, idx + 1);
          setDataEvent((current) => [...current, [removed]]);

          // console.log(
          //   eventVitural,
          //   eventDetail[0].eventitem,
          //   'eventDetail[0] vo trong if',
          // );
        }
      });
    }
  }, [eventDetail]);

  console.log(dataEvent, 'dataEvent');
  return (
    <Box className={classNames(classes.container_deal_day, 'reveal')}>
      <Box my={3} className={classes.box_title}>
        <Box display="flex">
          <Typography
            variant="h1"
            sx={{ fontWeight: 500, marginRight: 2 }}
            className={classNames(classes.title_dealday, 'title_bestsale')}
          >
            Deal Of Day
          </Typography>
          <Box display="flex" mb={1}>
            {/* <Box display="flex" mr={1}>
              <Box className={classes.item_left_time}>
                <Typography variant="subtitle1" color="text.white">
                  Ngày
                </Typography>
              </Box>
              <Box className={classes.vertical_devider}></Box>
              <Box className={classes.item_right_time}>
                <Typography sx={{ fontSize: 24 }} color="text.white" id="date">
                  10
                </Typography>
              </Box>
            </Box> */}
            <Box display="flex" mr={1}>
              <Box className={classes.item_left_time}>
                <Typography variant="subtitle1" color="text.white">
                  Giờ
                </Typography>
              </Box>
              <Box className={classes.vertical_devider}></Box>
              <Box className={classes.item_right_time}>
                <Typography sx={{ fontSize: 24 }} color="text.white" id="hour">
                  10
                </Typography>
              </Box>
            </Box>
            <Box display="flex" mr={1}>
              <Box className={classes.item_left_time}>
                <Typography variant="subtitle1" color="text.white">
                  Phút
                </Typography>
              </Box>
              <Box className={classes.vertical_devider}></Box>
              <Box className={classes.item_right_time}>
                <Typography
                  sx={{ fontSize: 24 }}
                  color="text.white"
                  id="minute"
                >
                  10
                </Typography>
              </Box>
            </Box>
            <Box display="flex" mr={1}>
              <Box className={classes.item_left_time}>
                <Typography variant="subtitle1" color="text.white">
                  Giây
                </Typography>
              </Box>
              <Box className={classes.vertical_devider}></Box>
              <Box className={classes.item_right_time}>
                <Typography
                  sx={{ fontSize: 24 }}
                  color="text.white"
                  id="second"
                >
                  10
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography
          variant="subtitle2"
          sx={{ color: colors.darkGray }}
          className={classes.show_all}
          onClick={() => navigate('/flashare')}
        >
          View all
        </Typography>
      </Box>
      <Box>
        <Box
          className={classNames(
            classes.container_banner,
            'reveal',
            'sliderdealday',
          )}
        >
          <Box className="arrow-dealday-hover">
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
            {dataEvent?.map((item, idx) => {
              console.log(item, 'item');
              return (
                <Box className={classes.bx_dealday}>
                  {item[0].map((itemevent, idx) => {
                    // console.log(itemevent, 'itemevent');
                    return <DealDayItem data={itemevent} />;
                  })}
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default DealDaySection;
