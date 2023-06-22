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

const BestSalerItem = (props) => {
  const classes = useStyles();

  return (
    <Box px={1.25}>
      <Box className={classes.container_item_bestsaler}>
        <img
          src="https://img.websosanh.vn/v10/users/review/images/mpymcdtskfxfh/camra-an-ninh.jpg?compress=85"
          className={classes.img_item_bestsaler}
        />
        <Box className={classes.bx_title}>
          <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
            Photograper
          </Typography>
        </Box>
        <Box className={classes.bx_item_select}>
          {Array(6)
            .fill(1)
            .map((item) => {
              return (
                <Box width="50%">
                  <Box className={classes.item_select}>
                    <ArrowForwardIos sx={{ fontSize: 8, marginRight: 0.5 }} />
                    <Typography
                      variant="subtitle2"
                      sx={{ lineHeight: '24px' }}
                      color="text.darkGray"
                    >
                      Desketop
                    </Typography>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default BestSalerItem;
