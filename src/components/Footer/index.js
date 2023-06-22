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

const Footer = (prosp) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const toHome = () => {
    navigate(`/`);
  };
  const toFaceBook = () => {
    navigate(`/`);
  };
  const toIntagram = () => {
    navigate(`/`);
  };
  const toGoogle = () => {
    navigate(`/`);
  };
  return (
    <Box className={classes.container_footer}>
      <Box width="40%">
        <Box>
          <img
            src="https://rubiktheme.com/demo/rb_mercado_demo/img/mercado-suppermarket-store-logo-1633487728.jpg"
            className={classes.logo_header}
          />
        </Box>
        <Box my={5} className={classes.bx_info_phone}>
          <HeadphonesOutlined
            sx={{ fontSize: 60, color: colors.orange, marginRight: 1 }}
          />
          <Box>
            <Typography variant="subtitle2" sx={{ color: colors.darkGray }}>
              Got questions? Call us 24/7!
            </Typography>
            <Typography
              variant="h1"
              sx={{ color: colors.orange, fontWeight: 500 }}
            >
              (+84) 123 4748 3324
            </Typography>
          </Box>
        </Box>
        <Box mb={1} className={classes.bx_location}>
          <MapOutlined sx={{ fontSize: 24, marginRight: 1 }} />
          <Typography variant="subtitle1" sx={{ color: colors.black }}>
            Contact info
          </Typography>
        </Box>
        <Typography variant="subtitle2" sx={{ color: colors.darkGray }}>
          7 Morval Rd, London SW2 1DG, UK
        </Typography>
        <Box mt={5} display="flex">
          <FacebookOutlined
            sx={{ fontSize: 32, marginRight: 2 }}
            className={classes.icon_social}
          />
          <Instagram
            sx={{ fontSize: 32, marginRight: 2 }}
            className={classes.icon_social}
          />
          <YouTube
            sx={{ fontSize: 32, marginRight: 2 }}
            className={classes.icon_social}
          />
          <Google
            sx={{ fontSize: 32, marginRight: 2 }}
            className={classes.icon_social}
          />
        </Box>
      </Box>

      <Box width="20%">
        <Typography
          variant="h1"
          sx={{ color: colors.black, marginBottom: 3, fontWeight: 500 }}
        >
          Category
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.txt_menu_footer}
          sx={{ color: colors.darkGray, marginBottom: 2 }}
        >
          Computer
        </Typography>
        <Typography
          className={classes.txt_menu_footer}
          variant="subtitle1"
          sx={{ color: colors.darkGray, marginBottom: 2 }}
        >
          Adidas
        </Typography>
        <Typography
          className={classes.txt_menu_footer}
          variant="subtitle1"
          sx={{ color: colors.darkGray, marginBottom: 2 }}
        >
          Nike
        </Typography>
        <Typography
          className={classes.txt_menu_footer}
          variant="subtitle1"
          sx={{ color: colors.darkGray, marginBottom: 2 }}
        >
          Jordan
        </Typography>
      </Box>
      <Box width="20%">
        <Typography
          className={classes.txt_menu_footer}
          variant="h1"
          sx={{ color: colors.black, marginBottom: 3, fontWeight: 500 }}
        >
          Utils
        </Typography>
        <Typography
          className={classes.txt_menu_footer}
          variant="subtitle1"
          sx={{ color: colors.darkGray, marginBottom: 2 }}
        >
          Computer
        </Typography>
        <Typography
          className={classes.txt_menu_footer}
          variant="subtitle1"
          sx={{ color: colors.darkGray, marginBottom: 2 }}
        >
          Adidas
        </Typography>
        <Typography
          className={classes.txt_menu_footer}
          variant="subtitle1"
          sx={{ color: colors.darkGray, marginBottom: 2 }}
        >
          Nike
        </Typography>
        <Typography
          className={classes.txt_menu_footer}
          variant="subtitle1"
          sx={{ color: colors.darkGray, marginBottom: 2 }}
        >
          Jordan
        </Typography>
      </Box>
      <Box width="20%">
        <Typography
          className={classes.txt_menu_footer}
          variant="h1"
          sx={{ color: colors.black, marginBottom: 3, fontWeight: 500 }}
        >
          Question
        </Typography>
        <Typography
          className={classes.txt_menu_footer}
          variant="subtitle1"
          sx={{ color: colors.darkGray, marginBottom: 2 }}
        >
          Computer
        </Typography>
        <Typography
          className={classes.txt_menu_footer}
          variant="subtitle1"
          sx={{ color: colors.darkGray, marginBottom: 2 }}
        >
          Adidas
        </Typography>
        <Typography
          className={classes.txt_menu_footer}
          variant="subtitle1"
          sx={{ color: colors.darkGray, marginBottom: 2 }}
        >
          Nike
        </Typography>
        <Typography
          className={classes.txt_menu_footer}
          variant="subtitle1"
          sx={{ color: colors.darkGray, marginBottom: 2 }}
        >
          Jordan
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
