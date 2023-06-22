import { makeStyles } from '@mui/styles';
import { color } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_account: {
    width: 1200,
    margin: 'auto auto',
    position: 'relative',
  },
  head_body_account: {
    marginBottom: 24,
  },

  head_item_account: {
    display: 'flex',
    alignItems: 'center',
  },
  vertical_devider: {
    marginRight: 8,
    marginLeft: 8,
  },
  body_item: {
    margin: '16px 0px',
  },
  box_form_login: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    marginTop: 40,
  },
  input_login: {
    height: 40,
    borderRadius: 6,
    marginBottom: 16,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: colors.white,
    borderColor: colors.lightGray,
  },
  btn_login: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 16px',
    fontSize: 12,
    borderRadius: 6,
    border: '1px solid',
    borderColor: colors.orange,
    backgroundColor: colors.orange,
    color: colors.white,
    cursor: 'pointer',
  },
  btn_register: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 16px',
    fontSize: 12,
    borderRadius: 6,
    border: '1px solid',
    borderColor: colors.green,
    backgroundColor: colors.green,
    color: colors.white,
    cursor: 'pointer',
  },
  box_btn_form: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  box_add_payment: {
    border: '1px dashed',
    borderColor: colors.lightGray,
    display: 'flex',
    height: 40,
    width: 'fit-content',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    padding: '0px 16px',
    cursor: 'pointer',
    marginBottom: 24,
  },
  txt_add_payment: {},
  box_payment: {
    border: '1px solid',
    borderColor: colors.lightGray,
    display: 'flex',
    flexDirection: 'column',
    height: 150,
    width: 300,
    justifyContent: 'space-between',

    borderRadius: 6,
    padding: '16px 16px',
    cursor: 'pointer',
    marginBottom: 24,
  },
  box_time_code: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  box_edit_payment: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  container_edit_name: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 999,
    top: 0,
  },
  box_edit_name: {
    marginTop: 0,
    width: 500,
    height: 'fit-content',
    backgroundColor: colors.lightGray,
    border: '1px solid',
    borderColor: colors.lightGray,
    borderRadius: 10,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  input_edit_info_account: {
    height: 40,
    borderRadius: 6,
    marginBottom: 16,
    backgroundColor: colors.white,
  },
  input_edit_info_account_address: {
    height: 40,
    width: 200,
    marginRight: 16,
    borderRadius: 6,
    marginBottom: 16,
    backgroundColor: colors.white,
  },
  btn_cancle: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 16px',
    fontSize: 12,
    borderRadius: 6,
    border: '1px solid',
    borderColor: colors.orange,
    backgroundColor: colors.orange,
    color: colors.white,
    cursor: 'pointer',
    marginRight: 8,
  },
  btn_save: {
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 16px',
    fontSize: 12,
    borderRadius: 6,
    border: '1px solid',
    borderColor: colors.green,
    backgroundColor: colors.green,
    color: colors.white,
    cursor: 'pointer',
  },
  box_footer_model: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  box_btn: {
    display: 'flex',
  },
  box_edit_item_name: {
    display: 'flex',
    flexDirection: 'row',
  },
  box_pagination_comment: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
  },
}));