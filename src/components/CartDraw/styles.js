import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_account_draw: {},
  box_title_cart: {
    backgroundColor: '#f7f7f7',
    borderBottom: '1px solid #CED4DA',
  },
  txt_title_cart: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  img_cart_item: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  item_product: {
    borderBottom: '1px solid #CED4DA',
  },
  bx_total: {
    padding: '16px 10px',
    backgroundColor: '#f7f7f7',
    borderBottom: '1px solid #CED4DA',
  },
  bx_total_amount: {
    padding: 5,
    backgroundColor: '#d1ecf1',
    borderRadius: 4,
  },
}));
