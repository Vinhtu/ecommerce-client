import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_right_sidebar: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    columnGap: 4,
    rowGap: 4,
  },
  img_item_sidebar: {
    width: 100,
    height: 140,
    backgroundImage: 'cover',
    borderRadius: 2,
    border: '1px solid',
    borderColor: colors.lightGray,
    cursor: 'pointer',
  },
  horizontal_devider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.lightGray,
    marginTop: 16,
    marginBottom: 16,
  },
}));
