import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_cart: {
    maxWidth: 1200,
    margin: 'auto auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  bx_left_cart: {
    width: '100%',
    marginRight: 16,
  },
  table_cart: {
    width: '100%',
    border: '1px solid rgba(160,160,160,.25)',
  },
  table_body: {
    // border: '1px solid rgba(160,160,160,.25)',
  },
  table_tr: {
    border: '1px solid rgba(160,160,160,.25)',
  },
  th_product: {
    padding: 16,
  },
  img_product: {
    width: 100,
    height: 100,
  },
  table_td: {
    padding: '16px 8px',
  },

  table_td_img: {
    padding: '16px 8px',
    width: 200,
  },
  table_td_name: {
    padding: '16px 8px',
    width: 350,
  },
  table_td_change_amount: {
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table_td_change_price: {
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table_td_icon_remove: {
    padding: '16px 8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name_product_tb: {
    '&:hover': {
      color: colors.orange,
    },
    cursor: 'pointer',
  },
  bx_change_amount: {
    display: 'flex',
    height: 40,
    width: 70,
    backgroundColor: colors.white,
    border: '1px solid rgba(0,0,0,.15)',
  },
  bx_amount: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid rgba(0,0,0,.15)',
  },
  btn_change: {
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  bx_right_cart: {
    width: 350,
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 4,
    height: 'fit-content',
  },
  horizontal_devider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGray,
  },
}));
