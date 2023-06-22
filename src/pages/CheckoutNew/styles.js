import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_checkout: {
    paddingTop: 40,
    paddingBottom: 40,
    maxWidth: 1200,
    margin: 'auto auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  bx_left_cart: {
    width: '100%',
    marginRight: 16,
  },
  bx_right_cart: {
    width: 500,
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

  checkbox_filter: {
    '& input': {
      opacity: 1,
    },
  },
  accordion_item: {
    margin: '0px !important',
    display: 'flex',
    alignItems: 'center',
    '&.Mui-expanded': {
      minHeight: '40px !important',
      borderBottom: `1px solid ${colors.darkGray2}`,
    },
    '&.MuiAccordionSummary-content': {
      display: 'flex !important',
      alignItems: 'center !important',
    },
  },

  accordion_item_product: {
    margin: '0px !important',
    display: 'flex',
    alignItems: 'center',
    '&.Mui-expanded': {
      minHeight: '40px !important',
    },
    '&.MuiAccordionSummary-content': {
      display: 'flex !important',
      alignItems: 'center !important',
    },
  },
  accordion_item_address: {
    '&.Mui-expanded': {
      minHeight: '40px !important',
      borderBottom: `1px solid ${colors.darkGray2}`,
    },
  },
  accordion_container: {
    border: '1px solid #CED4DA',
    padding: '3px 20px',
    '&.Mui-expanded': {
      margin: '0px !important',
      marginTop: '24px !important',
    },
    '&:before': {
      content: 'none !important',
    },
  },

  accordion_container_product: {
    padding: '3px 0pc',
    '&.Mui-expanded': {
      margin: '0px !important',
      marginTop: '24px !important',
    },
    '&:before': {
      content: 'none !important',
    },
  },
  bx_number_accordion: {
    width: 40,
    height: 40,
    border: '2px dashed #D70018',
    borderRadius: '50%',
    lineHeight: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  input_checkout: {
    backgroundColor: '#fff',
    border: '1px solid rgba(102,102,102,.46)',
    padding: '0 15px',
    height: '42px',
    borderRadius: '0',
    '&:focus': {
      borderColor: '#D70018',
    },
  },
  select_address: {
    height: 42,
    borderRadius: '0px !important',
    // border: '1px solid rgba(102,102,102,.46)',
    '&.Mui-focused': {
      border: '1px solid #D70018 ',
      // borderColor: '#D70018',
    },
  },
  box_radio_type_pay: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    height: 42,
    border: '1px solid rgba(102,102,102,.46)',
  },
  bx_item_cart: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img_item_cart: {
    width: 50,
    height: 50,
    border: 'rgba(160,160,160,.25) 1px solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
}));
