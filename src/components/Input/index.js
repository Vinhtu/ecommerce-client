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
const Input = (props) => {
  const classes = useStyles();

  return (
    <input
      type={props?.type}
      name={props?.name}
      id={props?.id}
      onChange={props.onChange}
      placeholder={props?.placeholder}
      className={classes.box_input}
    />
  );
};

export default Input;
