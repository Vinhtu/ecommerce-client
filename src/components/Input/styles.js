import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_input: {
    padding: '70px 20px !important',
  },
  box_input: {
    background: `${colors.white} !important`,
    border: '1px solid #ccc !important',
    height: '50px !important',
    color: `${colors.darkGray3} !important`,
    borderRadius: '0px !important',
    fontSize: '12px !important',
    padding: '8px 10px !important',
    width: '100% !important',
  },
}));
