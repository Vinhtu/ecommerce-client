import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_banner: {
    maxWidth: 1200,
    display: 'flex',
    margin: '0px auto 40px auto',
    // animation: `$animationSlide 1000ms`,
    // height: 120,
  },
  extend_nav_footer_header: {
    // display: 'none',
    // position: 'absolute',
    // top: theme.spacing(6),
    height: 430,
    width: 250,
    // border: '1px solid rgba(0,0,0,.15)',
    backgroundColor: colors.white,
    boxShadow: '0 4px 16px rgb(33 37 41 / 10%)',
    zIndex: 1000,
    overflow: 'scroll',
    borderBottomLeftRadius: 16,
  },
  extend_nav_footer_header_sub: {
    // display: 'none',
    // position: 'absolute',
    // top: theme.spacing(6),
    height: 430,
    width: 250,
    // border: '1px solid rgba(0,0,0,.15)',
    backgroundColor: colors.white,
    boxShadow: '0 4px 16px rgb(33 37 41 / 10%)',
    zIndex: 1000,
    overflow: 'scroll',
    // borderBottomLeftRadius: 16,
  },

  '@keyframes animationSlide': {
    '0%': {
      paddingTop: 0,
    },
    '100%': {
      paddingTop: 100,
    },
  },

  ///item voucher
  container_item_voucher: {
    position: 'relative',
    height: 430,
    borderRadius: theme.spacing(2),
    backgroundColor: colors.white,
  },
  prevSlide: {
    display: 'flex',
    padding: 0,
    width: 40,
    height: 40,
    // background: '#fff',
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    // visibility: 'hidden',
    // borderRadius: 50,
    // boxShadow: '0 1px 15px 0 rgb(0 0 0 / 10%)',
    cursor: 'pointer',
  },
  item_voucher_left: {},
  img_slider_header: {
    width: '100%',
    height: '100%',
    // borderRadius: 16,
    borderBottomRightRadius: 16,
  },
  content_slide: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  content_slide_text: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',

    justifyContent: 'center',
  },
  btn_slide: {
    height: 40,
    width: 'fit-content',
    padding: ' 10px 30px',
    borderRadius: 16,
    backgroundColor: colors.orange,
    cursor: 'pointer',
    marginTop: 24,
  },

  item_nav_dropdow: {
    display: 'flex',
    alignItems: 'center',
    width: theme.spacing(31.25),
    '&:hover .title_language': {
      color: colors.orange,
    },
    padding: '12px 16px !important',
    borderBottom: '1px solid rgba(0,0,0,.15)',
    cursor: 'pointer',
  },

  icon_nav: {
    width: theme.spacing(3),
    height: theme.spacing(1.5),
    marginRight: theme.spacing(1),
  },
}));
