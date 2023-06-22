import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_account_draw: {
    padding: '70px 20px',
  },
  box_title_sign_register: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txt_title: {
    textTransform: 'uppercase',
    colors: colors.black,
  },
  vertical_devider: {
    width: 1,
    height: 20,
    backgroundColor: colors.darkGray4,
  },
  bx_item_login: {
    display: 'flex',
    justifyContent: 'center',
  },
  box_icon_login_face: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#4862a3',
    transform: 'all 0.3s ease-in-out',
    marginRight: 16,
    '&:hover': {
      boxShadow: '0 1px 5px rgb(0 0 0 / 20%)',
    },
  },
  box_icon_login_google: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#3f85f4',
    transform: 'all 0.3s ease-in-out',

    '&:hover': {
      boxShadow: '0 1px 5px rgb(0 0 0 / 20%)',
    },
  },
  txt_forgetpassword: {
    '&:hover': {
      color: colors.orange,
    },
    cursor: 'pointer',
  },
  bx_item_account: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    cursor: 'pointer',
    '&:hover .item_hover': {
      color: colors.orange,
    },
  },
  horizontal_devider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.darkGray6,
  },
}));
