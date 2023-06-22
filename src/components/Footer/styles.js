import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_footer: {
    width: 1200,
    margin: 'auto auto',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '40px',
    paddingBottom: '40px',
  },
  logo_header: {
    maxHeight: theme.spacing(3.25),
    width: 'auto',
  },
  bx_info_phone: {
    display: 'flex',
  },
  bx_location: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  txt_menu_footer: {
    cursor: 'pointer',
    '&:hover': {
      color: colors.orange,
    },
  },
  icon_social: {
    cursor: 'pointer',
    '&:hover': {
      color: colors.orange,
    },
  },
}));
