import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star, LocalShippingOutlined } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart } from '@mui/icons-material';
import Slider from 'react-slick';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import classNames from 'classnames';

import './style.css';

const data = [
  {
    url: 'https://cdn.tgdd.vn/Files/2019/08/08/1185319/10_800x450.jpg',
    name: 'Máy tính',
  },
  {
    url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2021/giay-sneaker_63.jpg',
    name: 'Giày',
  },
  {
    url: 'https://product.hstatic.net/200000411281/product/khong_co_tieu_de__1080___1080_px___300___60_px___1080___1080_px__54feb474eabd4397b62cd86f517d712f_master.png',
    name: 'Bánh kem',
  },
  {
    url: 'https://baochauelec.com/cdn1/images/202109/goods_img/loa-karaoke-nhat-bik-bsp-410-cao-cap-full-bass-25cm-king-karaoke-P4070-1632815035387.jpg',
    name: 'Loa',
  },
  {
    url: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/12/4/859785/Honda-Wave-Alpha-1.jpg',
    name: 'Xe máy',
  },
  {
    url: 'https://vn-live-01.slatic.net/p/2a0b5cc11fcacb1f4ff99453814cd76f.jpg',
    name: 'Quần áo',
  },
  {
    url: 'https://cdn.tgdd.vn/Files/2019/08/08/1185319/10_800x450.jpg',
    name: 'Láp tóp',
  },
  {
    url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2021/giay-sneaker_63.jpg',
    name: 'Giày',
  },
  {
    url: 'https://product.hstatic.net/200000411281/product/khong_co_tieu_de__1080___1080_px___300___60_px___1080___1080_px__54feb474eabd4397b62cd86f517d712f_master.png',
    name: 'Bánh kem',
  },
  {
    url: 'https://cdn.tgdd.vn/Files/2019/08/08/1185319/10_800x450.jpg',
    name: 'Máy tính',
  },
  {
    url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2021/giay-sneaker_63.jpg',
    name: 'Giày',
  },
  {
    url: 'https://product.hstatic.net/200000411281/product/khong_co_tieu_de__1080___1080_px___300___60_px___1080___1080_px__54feb474eabd4397b62cd86f517d712f_master.png',
    name: 'Bánh kem',
  },
  {
    url: 'https://baochauelec.com/cdn1/images/202109/goods_img/loa-karaoke-nhat-bik-bsp-410-cao-cap-full-bass-25cm-king-karaoke-P4070-1632815035387.jpg',
    name: 'Loa',
  },
  {
    url: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/12/4/859785/Honda-Wave-Alpha-1.jpg',
    name: 'Xe máy',
  },
  {
    url: 'https://vn-live-01.slatic.net/p/2a0b5cc11fcacb1f4ff99453814cd76f.jpg',
    name: 'Quần áo',
  },
  {
    url: 'https://cdn.tgdd.vn/Files/2019/08/08/1185319/10_800x450.jpg',
    name: 'Láp tóp',
  },
  {
    url: 'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2021/giay-sneaker_63.jpg',
    name: 'Giày',
  },
  {
    url: 'https://product.hstatic.net/200000411281/product/khong_co_tieu_de__1080___1080_px___300___60_px___1080___1080_px__54feb474eabd4397b62cd86f517d712f_master.png',
    name: 'Bánh kem',
  },
];
const CategoryUtilItem = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const customeSlider = useRef();

  const [sliderSettings, setSliderSettings] = useState({
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    className: 'slidercategoryitem',
  });

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  return (
    <Box
      sx={{
        // display: 'flex',
        // justifyContent: 'space-between',
        maxWidth: 1200,
        margin: 'auto auto',
      }}
      className={classNames(
        classes.bx_container_category_item,
        'slidercategoryposition',
      )}
    >
      <Box className={classNames(classes.bx_container_category)}>
        <Box className="arrow-slider-hover-category-item">
          <Box
            className="arrow-slider-category"
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box
              className={classNames(classes.prevSlide, 'prevArrowSlide')}
              onClick={() => gotoPrev()}
            >
              <ArrowBackIosNew sx={{ fontSize: 14 }} />
            </Box>
            <Box
              className={classNames(classes.prevSlide, 'nextArrowSlide')}
              onClick={() => gotoNext()}
            >
              <ArrowForwardIos sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </Box>
        <Slider {...sliderSettings} ref={customeSlider}>
          {data.map((item) => {
            return (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={item.url}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 16,
                    color: colors.orange,
                    margin: '0px auto 8px auto',
                  }}
                />

                <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                  {item.name}
                </Typography>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
};

export default CategoryUtilItem;
