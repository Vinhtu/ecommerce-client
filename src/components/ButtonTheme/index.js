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
const ButtonTheme = (props) => {
  const classes = useStyles();

  return (
    <Box
      className={classNames(classes.box_btn)}
      onClick={props?.onClick}
      sx={{
        height: props?.height ? props.height : '50px',
        backgroundColor: props?.bgColor ? props.bgColor : colors.black,
        '&:hover': {
          backgroundColor: props?.bgColorHover
            ? props.bgColorHover
            : colors.orange,
        },
        '&:hover .label_btn_theme': {
          color: props?.labelHoverColor ? props.labelHoverColor : colors.white,
        },
      }}
    >
      <Typography
        variant="subtitle1"
        className="label_btn_theme"
        sx={{
          fontWeight: props?.fontWeight ? props.fontWeight : '500',
          color: props?.labelColor ? props.labelColor : colors.white,
          textTransform: props?.uppercase ? 'uppercase' : 'none',
        }}
      >
        {props?.text}
      </Typography>
    </Box>
  );
};

export default ButtonTheme;
