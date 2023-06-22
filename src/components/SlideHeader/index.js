import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../lib/colors';

import './style.css';
import { useNavigate } from 'react-router-dom';
import { GetVoucher, GetVoucherDate } from '../../redux/actions/vouchers';
import { PutAccountGiveVoucher } from '../../redux/actions/accounts';
import { GetBanners } from '../../redux/actions/banners';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import Slider from 'react-slick';
import classNames from 'classnames';
import { color } from '@mui/system';
const SlideHeader = (props) => {
  const classes = useStyles();
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
    className: 'sliderheader',
  });

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  const navigate = useNavigate();

  const { categoryList } = useSelector((state) => state.category);
  const toCategory = (category) => {
    navigate(`/category/${category}`, {
      state: {
        params: category,
      },
    });
  };

  const [showBox, setShowBox] = useState(false);

  return (
    <Box className={classNames(classes.container_banner, 'sliderheader')}>
      <Box
        sx={{ width: '20%' }}
        className={classNames(
          classes.extend_nav_footer_header,
          'extend_nav_footer_header',
        )}
      >
        {categoryList &&
          categoryList.data.results.map((item) => (
            <Box
              className={classes.item_nav_dropdow}
              onClick={() => toCategory(item.name)}
              onMouseEnter={() => setShowBox(true)}
              onMouseLeave={() => setShowBox(false)}
            >
              {/* <img src={item.icon} className={classes.icon_nav} /> */}
              <Typography
                variant="body1"
                className={classNames(classes.title_nav, 'title_nav')}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
      </Box>

      {showBox && (
        <Box
          sx={{ width: '20%', position: 'absolute', left: '20%' }}
          className={classNames(
            classes.extend_nav_footer_header_sub,
            'extend_nav_footer_header',
          )}
          onMouseEnter={() => setShowBox(true)}
          onMouseLeave={() => setShowBox(false)}
        >
          {categoryList &&
            categoryList.data.results.map((item) => (
              <Box
                className={classes.item_nav_dropdow}
                onClick={() => toCategory(item.name)}
              >
                {/* <img src={item.icon} className={classes.icon_nav} /> */}
                <Typography
                  variant="body1"
                  className={classNames(classes.title_nav, 'title_nav')}
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
        </Box>
      )}

      <Box sx={{ width: '80%' }}>
        <Box className="arrow-slider-hover-header">
          <Box
            className="arrow-slider-header"
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box
              className={classNames(classes.prevSlide, 'nextArrowHeader')}
              onClick={() => gotoPrev()}
            >
              <ArrowBackIosNew sx={{ fontSize: 40 }} />
            </Box>
            <Box
              className={classNames(classes.prevSlide, 'prevArrowHeader')}
              onClick={() => gotoNext()}
            >
              <ArrowForwardIos sx={{ fontSize: 40 }} />
            </Box>
          </Box>
        </Box>
        <Slider {...sliderSettings} ref={customeSlider}>
          {Array(11)
            .fill(1)
            .map((item) => {
              return (
                <Box>
                  <Box className={classes.container_item_voucher}>
                    <Box className={classes.content_slide}>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0603/7232/0427/files/mercado_slide1760x640_2.jpg?v=1637573823"
                        className={classes.img_slider_header}
                      />
                    </Box>
                    <Box className={classes.content_slide_text}>
                      <Box pl={12}>
                        <Typography
                          variant="h3"
                          sx={{ fontWeight: 100, marginBottom: 1 }}
                        >
                          HOT SALE
                        </Typography>
                        <Typography
                          variant="h1"
                          sx={{ fontWeight: 500, width: 400, marginBottom: 1 }}
                        >
                          HOT SALE Sony XPERIA 1 III Dual-SIM 256GB 5G
                        </Typography>
                        <Box mb={1} display="flex">
                          <Typography
                            variant="h3"
                            sx={{ fontWeight: 100, marginRight: 1 }}
                          >
                            Only
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: 40,
                              fontWeight: 500,
                              width: 300,
                              color: colors.orange,
                            }}
                          >
                            1.203.399
                          </Typography>
                        </Box>
                        <Box className={classes.btn_slide}>
                          <Typography
                            sx={{
                              fontSize: 16,
                              color: colors.white,
                            }}
                          >
                            Buy nove
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Slider>
      </Box>
    </Box>
  );
};

export default SlideHeader;
