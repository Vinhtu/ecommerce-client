import React from 'react';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import {
  Instagram,
  Google,
  Facebook,
  HeadphonesOutlined,
  MapOutlined,
  FacebookOutlined,
  YouTube,
} from '@mui/icons-material/';
import colors from '../../lib/colors';
import { useNavigate } from 'react-router-dom';

const FooterV3 = (prosp) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.container_footer_v3}>
      <Box className={classes.horizontal_devider}></Box>
      <Box className={classes.bx_payment}>
        <Typography variant="subtitle2" sx={{ color: colors.darkGray }}>
          Socical payment
        </Typography>

        <Box display="flex">
          <img
            src="https://www.androidauthority.com/wp-content/uploads/2015/07/location_marker_gps_shutterstock-1200x808.jpg.webp"
            className={classes.img_payment}
          />
          <img
            src="https://i.aydinlik.com.tr/2/1280/720/storage/files/images/2022/03/06/visa-ve-mastercarddan-rusya-karari-nuuL.jpg"
            className={classes.img_payment}
          />
          <img
            src="https://www.gosell.vn/blog/wp-content/uploads/2022/08/thanh-toan-momo-1.jpg"
            className={classes.img_payment}
          />
          <img
            src="https://mona.media/wp-content/uploads/2021/07/paypal-payment.png"
            className={classes.img_payment}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default FooterV3;
