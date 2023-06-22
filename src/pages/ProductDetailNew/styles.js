import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_category: {
    maxWidth: 1200,
    padding: '0px -10px',
    margin: '16px auto 40px auto',
    // animation: `$animationSlide 1000ms`,
    // height: 120,
  },
  container_category_slider: {
    maxWidth: 540,
  },

  ///item voucher
  container_item_voucher: {
    position: 'relative',
    display: 'flex',
    height: 540,
    borderRadius: theme.spacing(2),
    backgroundColor: colors.white,
  },
  prevSlide: {
    padding: 0,
    width: 40,
    height: 40,
    background: '#fff',
    color: '#6C757D',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // visibility: 'hidden',
    marginTop: 10,
    borderRadius: 50,
    boxShadow: '0 1px 15px 0 rgb(0 0 0 / 10%)',
    cursor: 'pointer',
  },
  item_voucher_left: {},
  content_product_detail: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 16,
    marginLeft: 10,
    padding: 16,
  },
  percent_item: {
    width: 46,
    height: 26,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 4,
    cursor: 'pointer',
    marginBottom: 4,
  },
  status_item: {
    width: 46,
    height: 26,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 4,
    cursor: 'pointer',
  },
  percent_price: {
    width: 46,
    height: 26,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: colors.primary,
    border: `2px solid ${colors.orange}`,
    borderRadius: 4,
    cursor: 'pointer',
  },
  pos_utils: {
    position: 'absolute',
    top: 12,
    left: 12,
  },
  vertical_devider: {
    height: 'auto',
    width: 1,
    backgroundColor: 'cfcfcf',
    margin: '0px 20px',
  },
  bx_title_color: {
    width: 100,
  },
  bx_select_color: {
    display: 'flex',
    alignItems: 'center',
  },
  bx_select_item: {
    backgroundColor: colors.white,
    padding: '5px 11px',
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: '4px 4px 4px rgb(0 0 0 / 14%)',
    cursor: 'pointer',
    marginRight: 13,
    transition: '0.3s',
    '&:hover': {
      boxShadow: 'none',
      border: `1px solid ${colors.orange}`,
    },
  },

  bx_select_item_onclick: {
    backgroundColor: colors.white,
    padding: '5px 11px',
    boxShadow: 'none',
    border: `1px solid ${colors.orange}`,
    cursor: 'pointer',
    marginRight: 13,
    transition: '0.3s',
  },

  bx_select_size: {
    backgroundColor: colors.white,
    width: 35,
    height: 35,

    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: '4px 4px 4px rgb(0 0 0 / 14%)',
    cursor: 'pointer',
    marginRight: 13,
    transition: '0.3s',

    '&:hover .box_tooltip': {
      visibility: 'visible',
      animation: `$boxtooltipsize 500ms`,
    },
    position: 'relative',
  },

  bx_select_size_onclick: {
    backgroundColor: colors.white,
    width: 35,
    height: 35,
    boxShadow: 'none',
    border: `1px solid ${colors.orange}`,
    cursor: 'pointer',
    marginRight: 13,
    transition: '0.3s',

    '&:hover .box_tooltip': {
      visibility: 'visible',
      animation: `$boxtooltipsize 500ms`,
    },
    position: 'relative',
  },

  '@keyframes boxtooltipsize': {
    '0%': {
      opacity: 0,
      marginBottom: '-10px',
    },
    '100%': {
      opacity: 1,
      marginBottom: '0px',
    },
  },

  img_select_size: {
    width: '100%',
    height: '100%',
  },
  box_tooltip: {
    visibility: 'hidden',
    padding: '4px 16px',
    backgroundColor: 'black',
    color: colors.white,
    textAlign: 'center',
    borderRadius: 4,
    /* Position the tooltip text - see examples below! */
    position: 'absolute',
    zIndex: 1,
    top: '-100%',
    left: '-50%',
    borderBottom: '1px dotted black',
  },
  border_arrow_tooltip: {
    position: 'absolute',
    left: '45%',
    width: theme.spacing(0),
    height: theme.spacing(0),
    borderLeft: `5px solid transparent`,
    borderRight: `5px solid transparent`,
    borderBottom: `5px solid ${colors.black}`,
    transform: 'rotate(180deg)',
    bottom: '-5px',
  },
  box_btn_to_cart: {
    borderTop: '1px dashed #ddd',
    borderBottom: '1px dashed #ddd',
  },
  bx_change_amount: {
    height: 48,
    width: 118,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #dee2e6',
    borderRadius: 8,
  },
  box_item_change_amount: {
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  box_amount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_add_to_cart: {
    height: 48,
    padding: '0px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: colors.orange,
    cursor: 'pointer',
  },
  eye_item: {
    marginRight: 8,
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray3,
    borderRadius: 16,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.orange,
    },
    '&:hover .icon_eye': {
      color: colors.white,
    },
  },
  icon_share: {
    '&:hover': {
      color: colors.orange,
    },
    cursor: 'pointer',
  },
  container_expend_product: {
    maxWidth: 1200,
    margin: 'auto auto',
    backgroundColor: colors.white,
    borderRadius: 16,
  },

  tab_style: {
    fontSize: '20px !important',
    color: `${colors.darkGray3} !important`,
    '.Mui-selected': {
      color: `${colors.black} !important`,
    },
  },
  btn_show_description: {
    padding: '5px 16px',
    backgroundColor: colors.green2,
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    borderRadius: 16,
    cursor: 'pointer',
  },
  img_des: {
    width: '100%',
    height: 500,
    borderRadius: 16,
    marginBottom: 24,
  },
  btn_to_login: {
    backgroundColor: 'red',
    padding: '5px 20px',
    width: 'fit-content',
    cursor: 'pointer',
  },

  bx_rate: {
    padding: 10,
    backgroundColor: '#f6f6f6',
    display: 'flex',
  },
  img_rate: {
    width: 60,
    height: 60,
    marginRight: 20,
  },

  bx_star_rate: {
    display: 'flex',
    cursor: 'pointer',
    marginTop: 4,
    marginBottom: 4,
  },
  icon_star: {
    color: colors.yellow,
    marginRight: 1,
  },

  box_pagination_comment: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
}));
