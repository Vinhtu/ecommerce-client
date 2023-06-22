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

const FooterV2 = (props) => {
  const classes = useStyles();

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

  return (
    <Box py={3} className={classNames(classes.container_footer_v2, 'reveal')}>
      <Box px={5} className={classes.bx_footer_v2}>
        <Box>
          <Typography variant="h1" sx={{ fontWeight: 500 }} color="text.white">
            Sign up to Newsletter
          </Typography>
          <Typography variant="body1" color="text.white">
            get updates by subscribe our weekly newsletter
          </Typography>
        </Box>
        <Box>
          <Box className={classes.wrap_input}>
            <Box className={classes.wrap_content_input}>
              <input type="text" className={classes.input_search_header} />
            </Box>
            <Box className={classes.btn_search}>
              <Typography variant="subtitle1" color="text.white">
                Subscribe
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterV2;
