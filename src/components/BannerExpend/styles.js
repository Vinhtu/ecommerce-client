import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_banner_fist: {
    maxWidth: 1200,
    margin: '24px auto 24px auto',
    // animation: `$animationSlide 1000ms`,
    height: 212,
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    gridGap: 20,
  },

  container_banner_tree: {
    maxWidth: 1200,
    margin: '32px auto 24px auto',
    // animation: `$animationSlide 1000ms`,
    height: 212,
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto',
    gridGap: 20,
  },

  container_item_banner1: {
    gridColumnStart: 2,
    // gridRowStart: 1,
    gridColumnEnd: 4,
  },
  container_banner_second: {
    maxWidth: 1200,
    margin: '0px auto 24px auto',
    // animation: `$animationSlide 1000ms`,
    height: 212,
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridGap: 20,
  },

  container_banner_fist_2: {
    maxWidth: 1200,
    margin: '24px auto 24px auto',
    height: 212,
    display: 'grid',
    gridTemplateColumns: 'auto auto ',
    gridGap: 20,
  },

  // '@keyframes animationSlide': {
  //   '0%': {
  //     paddingTop: 0,
  //   },
  //   '100%': {
  //     paddingTop: 100,
  //   },
  // },

  container_item_banner: {
    position: 'relative',
    height: 212,
    '&:hover .item_banner .img_banner': {
      transform: 'scale(1.1)',
    },
    overflow: 'hidden',
    borderRadius: 8,
  },

  ///item voucher
  item_banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    borderRadius: 8,
    cursor: 'pointer',
  },
  img_banner: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    transition: '0.4s ease',
    // '&:hover': {
    //   transform: 'scale3d(1.1,1.1,1)',
    //   // transform: 'scale(1.1)',
    //   // transition: 'opacity 1s ease 0s,transform 1s ease 0s',
    // },
  },

  '@keyframes scaleimg': {
    '0%': {
      transform: 'scale(1)',
    },
    '100%': {
      transform: 'scale(1.5)',
    },
  },
}));
