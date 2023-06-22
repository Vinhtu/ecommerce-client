import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart, MoreVert } from '@mui/icons-material';
import './style.css';
import TextField from '@mui/material/TextField';
import ItemReplyCommentProduct from '../ItemReplyCommentProduct';
import {
  PostReportComment,
  PutLikeComment,
  PutReplyComment,
} from '../../redux/actions/comments';
import Input from '../Input';

const ItemCommentProduct = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [reply, setReply] = React.useState(false);
  const [bodyReply, setBodyReply] = React.useState('');
  const navigate = useNavigate();
  const ToProduct = () => {
    navigate(`/product-detail`, {
      state: { data: props.data },
    });
  };

  const accountInfo = localStorage.getItem('accountinfo');
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const account_id = JSON.parse(accountInfo);
  const token = JSON.parse(accessToken);
  const refreshtoken = JSON.parse(refreshToken);

  const gap =
    new Date().getTime() -
    new Date(props.data && props.data.create_date).getTime();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  const likeComment = () => {
    const data = { account: account_id };
    if (token) {
      dispatch(PutLikeComment(props.data && props.data._id, data, token));
    }
  };

  const toReply = () => {
    const data = { account: account_id, body: bodyReply };
    if (token) {
      dispatch(PutReplyComment(props.data && props.data._id, data, token));
    }
    setReply(false);
  };

  const date_create = new Date(props.data && props.data.create_date).getTime();

  const [utilComment, setUtilComment] = React.useState(false);

  const toReportComment = (e) => {
    const data = {
      account_send: account_id,
      account_receive: props.data.account._id,
      sub_title: e,
      body: props.data?.body,
    };
    if (token) {
      dispatch(PostReportComment(props.data && props.data._id, data, token));
    }
  };

  const [showReply, setShowReply] = React.useState(false);
  return (
    <Box mb={2}>
      <Box className={classes.bx_rate}>
        <img src={props.data?.account?.avatar} className={classes.img_rate} />
        <Box>
          <Box display="flex" alignItems="center">
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 'bold', marginRight: 1 }}
            >
              {props.data?.account?.fullname}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: colors.darkGray,
                fontWeight: '100px !important',
                fontStyle: 'italic',
              }}
            >
              - {new Date(date_create).toLocaleDateString()} (
              {textDay > 0
                ? textDay + ' ngay truoc'
                : textHour > 0
                ? textHour + ' gio truoc'
                : textMinute > 0
                ? textMinute + ' phut truoc'
                : textSecond + ' giay truoc'}
              )
            </Typography>
          </Box>

          <Typography
            variant="subtitle2"
            sx={{ color: colors.darkGray, marginBottom: 2 }}
          >
            {props?.data?.body}
          </Typography>
          <Box className={classes.box_util_icon}>
            <Box onClick={() => likeComment()}>
              <Typography
                sx={{
                  marginRight: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    color: colors.orange,
                  },
                }}
              >
                Thich ({props.data && props.data.likecomment.length})
              </Typography>
            </Box>
            {props?.data?.replycomment?.length >= 0 &&
              props?.data?.replycomment[0]?.body && (
                <Box onClick={() => setShowReply(showReply ? false : true)}>
                  <Typography
                    sx={{
                      marginRight: 2,
                      cursor: 'pointer',
                      '&:hover': {
                        color: colors.orange,
                      },
                    }}
                  >
                    {showReply ? 'Ẩn trả lời' : 'Xem trả lời'}
                  </Typography>
                </Box>
              )}
            <Box onClick={() => setReply(true)}>
              <Typography
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    color: colors.orange,
                  },
                }}
              >
                Tra loi
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {reply && (
        <Box py={2} pl={8}>
          <Input
            type="textarea"
            id="body_reply"
            name="textValue"
            value={bodyReply}
            rows={5}
            onChange={(e) => setBodyReply(e.target.value)}
            className={classes.txt_area_comment}
          />
          <Box mt={1} className={classes.box_btn_reply_comment}>
            <Box
              className={classes.btn_cancle_reply_comment}
              onClick={() => setReply(false)}
            >
              <Typography
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    color: colors.orange,
                  },
                }}
              >
                Huỷ
              </Typography>
            </Box>
            <Box
              className={classes.btn_success_reply_comment}
              onClick={toReply}
            >
              <Typography
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    color: colors.orange,
                  },
                }}
              >
                Bình luận
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {showReply &&
        props.data &&
        props.data.replycomment.length >= 0 &&
        props?.data?.replycomment[0]?.body && (
          <Box py={2} pl={8}>
            {props.data.replycomment.map((item, idx) => {
              return <ItemReplyCommentProduct data={item} />;
            })}
          </Box>
        )}
    </Box>
  );
};

export default ItemCommentProduct;
