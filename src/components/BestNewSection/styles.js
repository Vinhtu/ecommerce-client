import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_deal_day: {
    maxWidth: '1200px !important',
    margin: ' auto auto',
    display: 'flex',
    justifyContent: 'space-between',
  },

  section_deal_day: {
    width: '49%',
  },
  bx_dealday: {
    display: 'grid !important',
    gridTemplateColumns: 'auto auto auto auto ',
    gridGap: 20,
  },
  box_title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid #ced4da`,
  },
  title_dealday: {
    color: 'black',
    '&::before': {
      content: '',
      background: '#D70018',
      width: '100%',
      height: 2,
      position: 'absolute',
      bottom: '-1px',
      left: 0,
    },
  },
  show_all: {
    cursor: 'pointer',
    '&:hover': {
      color: colors.orange,
    },
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
    borderRadius: 50,
    boxShadow: '0 1px 15px 0 rgb(0 0 0 / 10%)',
    cursor: 'pointer',
  },
  container_item_feature: {
    marginBottom: 20,
    display: 'flex',
    borderRadius: theme.spacing(2),
    backgroundColor: colors.white,
    '&:hover': {
      boxShadow: '0 1px 5px rgb(0 0 0 / 20%)',
    },
    '&:hover .bx_btn': {
      opacity: 1,
    },
    padding: 8,
    cursor: 'pointer',
  },
  img_item_bestsaler: {
    width: '100%',
    height: 63,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 16,
  },
  bx_title: {
    padding: '5px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  bx_item_select: {
    padding: 15,
    display: 'flex',
    flexWrap: 'wrap',
  },
  item_select: {
    display: 'flex',
    paddingTop: 3,
    paddingBottom: 3,
    alignItems: 'center',
  },
  left_item_dealday: {
    minWidth: 164,
    minHeight: 164,
    position: 'relative',
    marginRight: 24,
  },
  img_item: {
    width: '100%',
    height: 164,
    borderRadius: 16,
    cursor: 'pointer',
  },
  percent_item: {
    position: 'absolute',
    width: 46,
    height: 26,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    top: 8,
    left: 8,
    borderRadius: 4,
    cursor: 'pointer',
  },

  bx_btn: {
    position: 'absolute',
    top: 16,
    right: 10,
    opacity: 0,
    transition: '0.3s',
  },
  btn_add_to_cart: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 16,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.orange,
    },
    '&:hover .icon_eye': {
      color: colors.white,
    },
  },
  eye_item: {
    marginTop: 8,
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
  right_item_dealday: {
    paddingTop: 20,
    width: '100%',
    position: 'relative',
  },
  txt_category: {
    marginBottom: 8,
    color: colors.darkGray,
    '&:hover': {
      color: colors.orange,
    },
    cursor: 'pointer',
  },
  txt_title_product: {
    color: colors.black,
    marginBottom: 5,
    '&:hover': {
      color: colors.orange,
    },
    cursor: 'pointer',
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
  box_price: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
  },
  bx_time: {
    display: 'flex',
  },
  box_item_time: {
    width: 64,
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 16,
    marginBottom: 8,
  },
  txt_item_time: {
    lineHeight: 64,
    color: colors.darkGray3,
  },
  txt_time: {
    lineHeight: '20px',
    textAlign: 'center',
    color: colors.darkGray2,
  },
  container_item_banner: {
    position: 'relative',
    width: '30%',
    height: 830,
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
}));
