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
import classNames from 'classnames';
const BannerTree = (props) => {
  const classes = useStyles();

  function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  window.addEventListener('scroll', reveal);

  return (
    <Box>
      <Box className={classNames(classes.container_banner_tree, 'reveal')}>
        <Box className={classes.container_item_banner}>
          <Box className={classNames(classes.item_banner, 'item_banner')}>
            <img
              src="https://cdn.shopify.com/s/files/1/0603/7232/0427/files/mercado_banner573x320.jpg?v=1634024889"
              className={classNames(classes.img_banner, 'img_banner')}
            />
          </Box>
        </Box>
        <Box
          className={classNames(
            classes.container_item_banner,
            classes.container_item_banner1,
          )}
        >
          <Box className={classNames(classes.item_banner, 'item_banner')}>
            <img
              src="https://cdn.shopify.com/s/files/1/0603/7232/0427/files/mercado_banner573x320.jpg?v=1634024889"
              className={classNames(classes.img_banner, 'img_banner')}
            />
          </Box>
        </Box>
        <Box className={classes.container_item_banner}>
          <Box className={classNames(classes.item_banner, 'item_banner')}>
            <img
              src="https://cdn.shopify.com/s/files/1/0603/7232/0427/files/mercado_banner573x320.jpg?v=1634024889"
              className={classNames(classes.img_banner, 'img_banner')}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BannerTree;
