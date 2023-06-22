import React from 'react';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { KeyboardArrowRight } from '@mui/icons-material';
import colors from '../../lib/colors';

const Breadcrumb = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.container_breadcrumb}>
      <Box py={3} display="flex" alignItems="center">
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle2" sx={{ color: colors.darkGray4 }}>
            {props.sub}
          </Typography>
        </Box>
        {props?.sub1 && (
          <Box display="flex" alignItems="center">
            <KeyboardArrowRight
              sx={{
                fontSize: 12,
                marginLeft: 0.5,
                marginRight: 0.5,
                color: colors.darkGray2,
              }}
            />
            <Typography variant="subtitle2" sx={{ color: colors.darkGray4 }}>
              {props?.sub1}
            </Typography>
          </Box>
        )}

        {props?.sub2 && (
          <Box display="flex" alignItems="center">
            <KeyboardArrowRight
              sx={{
                fontSize: 12,
                marginLeft: 0.5,
                marginRight: 0.5,
                color: colors.darkGray2,
              }}
            />
            <Typography variant="subtitle2" sx={{ color: colors.darkGray4 }}>
              {props?.sub2}
            </Typography>
          </Box>
        )}

        {props?.sub3 && (
          <Box display="flex" alignItems="center">
            <KeyboardArrowRight
              sx={{
                fontSize: 12,
                marginLeft: 0.5,
                marginRight: 0.5,
                color: colors.darkGray2,
              }}
            />
            <Typography variant="subtitle2" sx={{ color: colors.darkGray4 }}>
              {props?.sub3}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Breadcrumb;
