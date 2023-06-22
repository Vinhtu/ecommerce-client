import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_product_detail: {
    maxWidth: 1440,
    margin: 'auto auto',
  },
  container_main_product: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  left_product_detail: {
    width: '50%',
  },
  right_product_detail: {
    width: '50%',
    paddingLeft: 32,
  },
  txt_tag_product: {
    fontStyle: 'italic',
    marginBottom: 24,
    color: colors.gray,
  },
  txt_name_product: {
    marginBottom: 24,
  },
  box_rate: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
  },
  box_rate_icon: {
    display: 'flex',
    marginRight: 16,
  },
  rate_icon: { fontSize: '14px !important', color: colors.orange },
  box_price: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 24,
  },
  main_price: {
    color: colors.green,
    marginRight: 16,
  },
  promotion_price: {
    color: colors.gray,
    textDecorationLine: 'line-through',
  },
  percent_promotion_price: {
    color: colors.orange,
    textDecorationLine: 'line-through',
  },
  vertical_devider_product_detail: {
    width: '100%',
    height: 1,
    backgroundColor: '#F5F4F3',
    marginTop: 24,
    marginBottom: 24,
  },
  box_color: {
    marginBottom: 16,
  },
  box_size: {
    marginBottom: 16,
  },
  box_amount: {
    marginBottom: 16,
  },
  container_amount: {
    display: 'flex',
    alignItems: 'center',
  },
  btn_reduce_amount: {
    display: 'flex',
    padding: '4px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F4F3',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    cursor: 'pointer',
  },
  btn_increase_amount: {
    display: 'flex',
    padding: '4px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F4F3',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    cursor: 'pointer',
  },
  box_btn_product: {
    display: 'flex',
  },
  btn_buy_product: {
    padding: '8px 40px',
    borderRadius: 6,
    // backgroundColor: colors.green,
    display: 'flex',
    justifyContent: 'cemter',
    alignItems: 'center',
    marginRight: 8,
    border: '1px solid',
    borderColor: colors.green,
    color: colors.green,
    '&:hover': {
      backgroundColor: colors.green,
      color: colors.white,
    },
    cursor: 'pointer',
  },
  btn_add_cart_product: {
    padding: '8px 40px',
    borderRadius: 6,
    // backgroundColor: colors.green,
    display: 'flex',
    justifyContent: 'cemter',
    alignItems: 'center',
    marginRight: 8,
    border: '1px solid',
    borderColor: colors.orange,
    color: colors.orange,
    '&:hover': {
      backgroundColor: colors.orange,
      color: colors.white,
    },
    cursor: 'pointer',
  },
  container_tab_product_detail: {
    marginTop: 100,
  },
  container_discription: {
    height: 500,
    overflow: 'hidden',
  },
  container_btn_show_description: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_show_description: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: 6,
    width: 'fit-content',
    '&:hover': {
      borderColor: colors.green,
      border: '1px solid',
    },
    cursor: 'pointer',
  },
  box_pagination_comment: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  container_product_list_img: {
    width: 1440,
    margin: 'auto auto',
    marginBottom: 24,
  },
  body_grid_product: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto',
    columnGap: 10,
    rowGap: 10,
  },
  container_btn_show_product: {
    width: '100%',
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  btn_show_product: {
    display: 'flex',
    justifyContent: 'cemter',
    alignItems: 'cemter',
    borderRadius: 10,
    '&:hover': {
      border: `1px solid ${colors.green}`,
      padding: '8px 16px',
    },
    cursor: 'pointer',
  },
  container_product_list_img: {
    width: 1440,
    margin: 'auto auto',
    marginBottom: 24,
  },
  body_grid_product_sale: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto',
    columnGap: 2,
    rowGap: 2,
  },
}));
