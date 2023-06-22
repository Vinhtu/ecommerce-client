import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  box_td_product: {
    display: 'flex',
    marginTop: 16,
    marginBottom: 16,
  },
  box_img_product: {
    marginRight: 16,
  },
  img_product_cart: {
    width: 100,
    height: 100,
    borderRadius: 6,
  },
  rate_product: {
    display: 'flex',
    marginBottom: 4,
  },
  icon_star_rate_product: { color: colors.orange },
  sub_category_product: {
    fontStyle: 'italic',
  },
  td_amount_product: {
    display: 'flex',
    alignItems: 'center',
  },
  btn_reduce_amount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'gray',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    cursor: 'pointer',
  },
  btn_increase_amount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'gray',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    cursor: 'pointer',
  },
  txt_amount: {
    padding: '0px 8px',
  },
  container_tr_table: {
    marginBottom: 16,
    width: '100%',
  },
  container_right_cart: {},
  head_right_cart: {},
  container_checkout_item: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box_address_ship: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  box_input_note_product: {
    display: 'flex',
    alignItems: 'center',
  },
  input_note_product: {
    height: 40,
    width: '50%',
    borderRadius: 6,
  },
  btn_note_product: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    borderRadius: 6,
    backgroundColor: colors.primary,
    color: colors.white,
    padding: '0px 16px',
    fontSize: 12,
    cursor: 'pointer',
  },
}));
