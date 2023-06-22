import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_deal_day: {
    maxWidth: 1200,
    margin: '24px auto 24px auto',
  },

  bx_dealday: {
    height: 600,
    display: 'grid !important',
    gridTemplateColumns: 'auto auto ',
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
  container_item_dealday: {
    borderRadius: theme.spacing(2),
    backgroundColor: colors.white,
    '&:hover': {
      boxShadow: '0 1px 5px rgb(0 0 0 / 20%)',
    },
    padding: 8,
    display: 'flex',
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
    width: 254,
    height: 254,
    position: 'relative',
  },
  img_item: {
    width: '100%',
    height: '100%',
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
  eye_item: {
    position: 'absolute',
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray3,
    bottom: -8,
    right: 8,
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
    padding: '8px 0px 8px 28px',
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
    marginBottom: 10,
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
  },
  bx_time: {
    display: 'flex',
  },
  box_item_time: {
    width: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 16,
    marginBottom: 8,
    '&:hover': {
      backgroundColor: colors.orange,
    },
    '&:hover .icon_eye': {
      color: colors.white,
    },
    cursor: 'pointer',
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
  item_left_time: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: 40,
    width: 65,
  },
  item_right_time: {
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: 65,
  },
  vertical_devider: {
    width: 1,
    height: 'fit-content',
    backgroundColor: colors.white,
  },
}));
