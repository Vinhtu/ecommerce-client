import { makeStyles } from '@mui/styles';
import colors from '../../lib/colors';
export default makeStyles((theme) => ({
  container_item_comment_product: {
    display: 'flex',
    width: '100%',
    marginBottom: 24,
  },
  img_user_comment: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  head_comment_product: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
  },
  name_time_comment: {
    display: 'flex',
    alignItems: 'center',
  },
  box_rate: {
    display: 'flex',
    marginLeft: 16,
  },
  txt_body_comment: {
    marginBottom: 16,
  },
  box_util_icon: {
    display: 'flex',
    marginBottom: 24,
  },
  box_body_comment: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  txt_area_comment: {
    borderRadius: 8,
    marginBottom: 16,
  },
  box_btn_reply_comment: {
    display: 'flex',
  },
  btn_cancle_reply_comment: {
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 16px',
    marginRight: 8,
  },
  btn_success_reply_comment: {
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 16px',
  },
}));
