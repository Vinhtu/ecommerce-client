import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_footer_v3: {
    width: 1200,
    margin: 'auto auto',
    paddingBottom: '40px',
  },
  horizontal_devider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.darkGray,
  },
  bx_payment: {
    paddingTop: 16,
    paddingBottom: 16,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  img_payment: {
    width: 50,
    height: 32,
    marginRight: 8,
  },
}));
