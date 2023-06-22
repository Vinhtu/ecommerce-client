import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star, LocalShippingOutlined } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart } from '@mui/icons-material';
import './style.css';

const data = [
  {
    icon: 'https://cdn.shopify.com/s/files/1/0603/7232/0427/files/mercado_support1.png?v=1637160913',
    name: 'Free Delivery',
  },
  {
    icon: 'https://cdn.shopify.com/s/files/1/0603/7232/0427/files/mercado_support1.png?v=1637160913',
    name: '365 days',
  },
  {
    icon: 'https://cdn.shopify.com/s/files/1/0603/7232/0427/files/mercado_support1.png?v=1637160913',
    name: 'Payment',
  },
  {
    icon: 'https://cdn.shopify.com/s/files/1/0603/7232/0427/files/mercado_support1.png?v=1637160913',
    name: 'Only Best',
  },
];
const RuleWord = (props) => {
  const classes = useStyles();

  return (
    <Box
      py={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: 1200,
        margin: 'auto auto',
      }}
    >
      {data.map((item) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocalShippingOutlined
              sx={{ fontSize: 20, marginRight: 2, color: colors.orange }}
            />
            <Typography variant="subtitle1">{item.name}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default RuleWord;
