import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_right_sidebar: {},
  bx_container_category: {
    borderRadius: 16,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  bx_container_category_item: {
    position: 'relative',
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
  prevSlide: {
    padding: 0,
    width: 40,
    height: 40,
    background: '#fff',
    color: '#6C757D',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // visibility: 'hidden',
    marginTop: 10,
    borderRadius: 50,
    boxShadow: '0 1px 15px 0 rgb(0 0 0 / 10%)',
    cursor: 'pointer',
  },
}));
