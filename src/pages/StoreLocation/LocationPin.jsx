import { Box, Typography } from '@mui/material';
import React from 'react';
import { Icon } from '@iconify/react';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const LocationPin = ({ text }) => {
  return (
    <Box>
      <ArrowBackIosNew sx={{ fontSize: 14 }} />
      <Typography>{text}</Typography>
    </Box>
  );
};

export default LocationPin;
