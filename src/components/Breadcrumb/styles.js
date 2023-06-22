import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_breadcrumb: {
    width: 1200,
    margin: 'auto auto',
  },
  container_item_breadcrumb: {
    display: 'flex',
    alignItems: 'center',
  },
  divider_breadcrumb: {
    marginLeft: '4px !important',
    marginRight: '4px !important',
  },
  title_breadcrumb: {
    fontStyle: 'italic',
  },
}));
