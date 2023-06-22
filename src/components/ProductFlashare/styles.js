import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_item_product: {
    minWidth: 220,
    maxWidth: 250,
    height: 300,
    borderRadius: 2,
    border: '1px solid #F5F4F3',
    '&:hover': {
      borderColor: colors.lightGray1,
    },
  },
  container_img_item_product: {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    height: 210,
    width: '100%',
    position: 'relative',
  },
  img_item_product: {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    height: 210,
    width: '100%',
  },
  price_item_product: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  body_item_product: {
    padding: '0px 16px 16px 16px',
  },
  location_item_product: {
    display: 'flex',
    marginBottom: 8,
  },
  rate_item_product: {
    display: 'flex',
    marginBottom: 8,
  },
  price_item_product: {
    display: 'flex',
    flexDirection: 'column',

    alignItems: 'center',
  },

  mask_item_product: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  },
  hover_item_product: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_hover_item_product: {
    color: colors.white,
    fontSize: 20,
  },
  text_hover_item_product: {
    color: colors.white,
  },
}));
