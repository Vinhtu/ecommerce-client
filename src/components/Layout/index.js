import React, { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Box } from '@mui/material';
import FooterV3 from '../FooterV3';
import ScrollToTop from 'react-scroll-to-top';
import { ExpandLess } from '@mui/icons-material';
import colors from '../../lib/colors';
import UtilQA from '../ItemUtilCare/UtilQA';
import UtilVideoTest from '../ItemUtilCare/UtilVideoTest';
import UtilSaleWith from '../ItemUtilCare/UtilSaleWith';

const Layout = (props) => {
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <Box sx={{ position: 'relative' }}>
      <Header />
      <UtilQA />
      <UtilVideoTest />
      <UtilSaleWith />
      <Box sx={{ backgroundColor: '#f8f9fa' }}>{props.children}</Box>
      <Footer />
      <FooterV3 />
      <ScrollToTop smooth />
      <Box
        onClick={() => toTop()}
        sx={{
          position: 'absolute',
          bottom: 24,
          right: 24,
          width: 48,
          height: 48,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          border: `1px solid ${colors.darkGray2}`,
          cursor: 'pointer',
          '&:hover .icon-scroll': {
            color: colors.orange,
          },
          '&:hover': {
            border: `1px solid ${colors.orange}`,
          },
        }}
      >
        <ExpandLess
          sx={{ fontSize: 20, color: colors.darkGray2 }}
          className="icon-scroll"
        />
      </Box>
    </Box>
  );
};

export default Layout;
