import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_best_saler: {
    maxWidth: 1200,
    margin: '40px auto 24px auto',
  },

  box_title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid #ced4da`,
  },
  title_bestsale: {
    color: 'black',
    '&::before': {
      content: '',
      background: '#D70018',
      width: '100%',
      height: 2,
      position: 'absolute',
      bottom: '-1px',
      left: 0,
    },
  },
  show_all: {
    cursor: 'pointer',
    '&:hover': {
      color: colors.orange,
    },
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
    borderRadius: 50,
    boxShadow: '0 1px 15px 0 rgb(0 0 0 / 10%)',
    cursor: 'pointer',
  },
  container_item_bestsaler: {
    borderRadius: theme.spacing(2),
    backgroundColor: colors.white,
    boxShadow: '0 1px 5px rgb(0 0 0 / 20%)',
  },
  img_item_bestsaler: {
    width: '100%',
    height: 63,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 16,
  },
  bx_title: {
    padding: '5px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  bx_item_select: {
    padding: 15,
    display: 'flex',
    flexWrap: 'wrap',
  },
  item_select: {
    display: 'flex',
    paddingTop: 3,
    paddingBottom: 3,
    alignItems: 'center',
  },
}));
