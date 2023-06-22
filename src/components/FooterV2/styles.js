import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_footer_v2: {
    width: '100%',
    backgroundColor: colors.orange,
  },
  bx_footer_v2: {
    maxWidth: 1200,
    margin: 'auto auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  wrap_input: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: theme.spacing(50),
    height: theme.spacing(6),
    border: `1px solid ${colors.orange}`,
    borderRadius: theme.spacing(1),
    backgroundColor: colors.white,
    marginLeft: theme.spacing(7),
  },
  wrap_content_input: {
    padding: '8px 16px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  input_search_header: {
    height: theme.spacing(4),
    backgroundColor: colors.white,
    border: 0,
    color: '#adb5bd',
  },
  btn_search: {
    height: theme.spacing(6),
    borderTopRightRadius: theme.spacing(1),
    borderBottomRightRadius: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    cursor: 'pointer',
  },
}));
