import { ThreeMp } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { color } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_top_header: {
    maxWidth: 1440,
    margin: 'auto auto',
    display: 'flex',
    height: 32,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vertical_devider: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  top_left_header: {
    display: 'flex',
    alignItems: 'center',
  },
  top_right_header: {
    display: 'flex',
    alignItems: 'center',
  },
  container_middle_header: {
    height: 80,
    backgroundColor: colors.green,
  },
  content_middle_header: {
    maxWidth: 1440,
    height: 80,
    margin: 'auto auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img_logo_header: { width: 100, height: 50 },
  icon_left_middle_header: {
    color: colors.white,
  },
  container_bottom_header: {
    maxWidth: 1440,
    margin: 'auto auto',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container_left_bottom_header: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
  },
  container_right_bottom_header: {
    display: 'flex',
  },
  item_nav_left: {
    cursor: 'pointer',
    marginRight: 16,
  },
  item_nav_right: {
    cursor: 'pointer',
    marginLeft: 16,
  },
  item_nav_left_arrow: {
    cursor: 'pointer',
    marginRight: 16,
    display: 'flex',
    alignItems: 'center',
  },
  container_menu_all_category: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
  },
  item_nav_category: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    width: '20%',
    borderRadius: 4,
    '&:hover': {
      backgroundColor: '#FFEFE2',
    },
    alignItems: 'center',
    padding: '8px 24px',
  },
  item_nav_hot: {
    cursor: 'pointer',
    display: 'flex',
    padding: '4px 10px',
    borderRadius: 50,
    backgroundColor: '#FFEFE2',
    alignItems: 'center',
    marginRight: 8,
  },
  horizontal_devider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGray,
    marginTop: 16,
    marginBottom: 16,
  },
  box_total_price_cart_header: {
    display: 'flex',
    alignItems: 'center',
  },
  box_note_header: {
    display: 'flex',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_total_cart: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.orange,
    marginTop: 24,
    borderRadius: 6,
    border: '1px solid',
    // color: colors.orange,
    borderColor: colors.orange,
    backgroundColor: colors.orange,
    color: colors.white,
    // '&:hover': {
    //   backgroundColor: colors.orange,
    //   color: colors.white,
    // },
    cursor: 'pointer',
  },
  item_multi_language: {
    padding: '8px 16px',
    '&:hover': {
      backgroundColor: colors.lightGray,
    },
  },
  container_model_note: {
    // position: 'absolute',
    right: 50,
    top: 50,
  },
  wrap_model_note: {
    width: 300,
    backgroundColor: colors.lightGray,
    borderRadius: 4,
    padding: 16,
    position: 'relative',
    zIndex: 999,
  },
  icon_delete: {
    position: 'absolute',
    left: -3,
    top: -3,
    cursor: 'pointer',
    width: 10,
    height: 10,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.lightGray,
  },

  /// theme new
  container_top_header_new: {
    width: '100%',
    background: colors.lightGray,
  },
  wrap_top_header_new: {
    maxWidth: theme.spacing(150),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto auto',
  },
  title_top_header_new: {
    '&:hover': {
      color: colors.orange,
    },
    color: colors.darkGray,
    cursor: 'pointer',
  },
  right_top_header_new: {
    display: 'flex',
    alignItems: 'center',
  },
  item_right_top_header_new: {
    position: 'relative',
    display: 'flex',
    '&:hover .hover_item': {
      color: colors.orange,
    },
    color: colors.darkGray,
    cursor: 'pointer',
  },
  icon_item_right: {
    fontSize: theme.spacing(2.5),
    marginRight: theme.spacing(1),
  },
  txt_item_right: {
    color: colors.darkGray,
  },
  horizontal_devider_new: {
    width: 1,
    height: theme.spacing(2),
    backgroundColor: colors.darkGray,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  focus_right_top_header: {
    position: 'relative',
  },
  focus_money_right_top_header: {
    position: 'relative',
  },
  extend_menu_top_header: {
    display: 'none',
    position: 'absolute',
    top: theme.spacing(3.5),
    left: theme.spacing(-2),
    border: '1px solid rgba(0,0,0,.15)',
    backgroundColor: colors.white,
    zIndex: 9999,
    // height: theme.spacing(0),
  },

  item_language_dropdow: {
    display: 'flex',
    alignItems: 'center',
    '&:hover .title_language': {
      color: colors.orange,
    },
    borderBottom: '1px solid rgba(0,0,0,.15)',
    cursor: 'pointer',
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
  icon_language: {
    width: theme.spacing(2),
    height: theme.spacing(1.5),
    marginRight: theme.spacing(1),
  },
  title_language: {
    whiteSpace: 'nowrap',
  },
  title_nav: {
    whiteSpace: 'nowrap',
    color: colors.darkGray,
  },

  focus_right_top_header: {
    '&:hover .extend_menu_top_header': {
      display: 'block !important',
      animation: `$dropdowlanguage 500ms`,
    },
  },
  focus_money_right_top_header: {
    '&:hover .extend_menu_top_header': {
      display: 'block !important',
      animation: `$dropdowlanguage 500ms`,
    },
  },

  '@keyframes dropdowlanguage': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },

  border_arrow: {
    zIndex: 9999,
    marginTop: -9,
    marginLeft: '65%',
    width: theme.spacing(0),
    height: theme.spacing(0),
    borderLeft: `10px solid transparent`,
    borderRight: `10px solid transparent`,
    borderBottom: `10px solid ${colors.white}`,
  },

  container_middle_header_new: {
    maxWidth: theme.spacing(150),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto auto',
  },
  logo_header: {
    maxHeight: theme.spacing(3.25),
    width: 'auto',
  },
  item_account_header: {
    display: 'flex',
    marginLeft: theme.spacing(5),
  },
  box_avatar_header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(1),
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 8px rgb(33 37 41 / 20%)',
  },
  img_avatar_header: {
    borderRadius: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  name_avatar_header: {
    color: colors.black,
    fontWeight: `500 !important`,
    marginBottom: `${theme.spacing(0.375)} !important`,
  },
  item_cart_header: {
    display: 'flex',
    marginLeft: theme.spacing(5),
  },
  box_cart_header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(1),
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 8px rgb(33 37 41 / 20%)',
    position: 'relative',
  },
  img_cart_header: {
    borderRadius: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  name_cart_header: {
    color: colors.black,
    fontWeight: `500 !important`,
    marginBottom: `${theme.spacing(0.375)} !important`,
  },
  dot_cart_header: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.orange,
    width: theme.spacing(2),
    height: theme.spacing(2),
    borderRadius: theme.spacing(6.25),
    zIndex: 1000,
  },
  container_footer_header_new: {
    width: '100%',
    backgroundColor: colors.orange,
  },
  wrap_footer_header_new: {
    maxWidth: theme.spacing(150),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto auto',
  },
  left_footer_header: {
    display: 'flex',
    alignItems: 'center',
  },
  wrap_input: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: theme.spacing(72.5),
    height: theme.spacing(5),
    border: `1px solid ${colors.orange}`,
    borderRadius: theme.spacing(1),
    backgroundColor: colors.white,
  },

  wrap_content_input: {
    padding: '8px 16px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  input_search_header: {
    height: theme.spacing(4),
    backgroundColor: colors.white,
    border: 0,
    color: '#adb5bd',
  },
  btn_search: {
    height: theme.spacing(5),
    borderTopRightRadius: theme.spacing(1),
    borderBottomRightRadius: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    cursor: 'pointer',
  },

  focus_all_nav: {
    position: 'relative ',
    display: 'flex',
    alignItems: 'center',
  },
  extend_nav_footer_header: {
    display: 'none',
    position: 'absolute',
    top: theme.spacing(6),
    left: theme.spacing(0),
    height: 430,
    // border: '1px solid rgba(0,0,0,.15)',
    backgroundColor: colors.white,
    boxShadow: '0 4px 16px rgb(33 37 41 / 10%)',
    zIndex: 1000,
    overflow: 'scroll',
  },

  focus_all_nav: {
    '&:hover .extend_nav_footer_header': {
      display: 'block !important',
      animation: `$dropdowmenu 500ms`,
    },
  },

  '@keyframes dropdowmenu': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },

  border_arrow_nav: {
    marginTop: -9,
    marginLeft: '25%',
    width: theme.spacing(0),
    height: theme.spacing(0),
    borderLeft: `10px solid transparent`,
    borderRight: `10px solid transparent`,
    borderBottom: `10px solid ${colors.white}`,
  },
  name_product_search: {
    cursor: 'pointer',
    '&:hover': {
      color: colors.orange,
    },
  },
  bx_content_search: {
    position: 'absolute',
    top: 48,
    width: theme.spacing(72.5),
    backgroundColor: colors.white,
    height: 500,
    borderRadius: 16,
    padding: 24,
    overflow: 'scroll',
    zIndex: 999999,
  },
  // wp_search: {
  //   '&:hover .content_search': {
  //     display: 'block !important',
  //   },
  // },
}));
