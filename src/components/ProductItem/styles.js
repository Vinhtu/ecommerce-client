import { makeStyles } from '@mui/styles';
import { color } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_item_product: {
    minWidth: 220,
    maxWidth: 250,
    height: 310,
    borderRadius: 4,
    border: '1px solid #F5F4F3',
    '&:hover': {
      border: '1px solid',
      borderColor: colors.lightGray1,
      marginTop: -2,
    },
  },
  container_img_item_product: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 200,
    width: '100%',
    position: 'relative',
  },
  img_item_product: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 200,
    width: '100%',
    cursor: 'pointer',
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
    justifyContent: 'space-between',
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
