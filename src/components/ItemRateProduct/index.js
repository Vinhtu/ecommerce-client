import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { LocationOn, Star } from '@mui/icons-material/';
import colors from '../../lib/colors';
import { RemoveRedEye, ShoppingCart, MoreVert } from '@mui/icons-material';
import './style.css';
import TextField from '@mui/material/TextField';
import ItemReplyCommentProduct from '../ItemReplyCommentProduct';

const ItemRateProduct = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const ToProduct = () => {
    navigate(`/product-detail`, {
      state: { data: props.data },
    });
  };

  return (
    <Box className={classes.container_item_comment_product}>
      <Box sx={{ marginRight: 2 }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKpiFXNibuHIcJpUpot_YgS55ywsPHhSiEA&usqp=CAU"
          className={classes.img_user_comment}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box className={classes.head_comment_product}>
          <Box className={classes.name_time_comment}>
            <Typography variant="h3" sx={{ marginRight: 1 }}>
              Lyant
            </Typography>
            <Typography variant="body1" sx={{ color: colors.gray }}>
              {' '}
              Nov 14, 2020 (9 gio truoc)
            </Typography>
            <Box className={classes.box_rate}>
              <Star sx={{ fontSize: 14, color: colors.orange }} />
              <Star sx={{ fontSize: 14, color: colors.orange }} />
              <Star sx={{ fontSize: 14, color: colors.orange }} />
              <Star sx={{ fontSize: 14, color: colors.orange }} />
              <Star sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </Box>
        <Box className={classes.box_body_comment}>
          <Box>
            <Box className={classes.txt_body_comment}>
              <Typography variant="subtitle1">
                Dép siêu xinh, chất lượng quá ok luôn ạ, đi êm, đế cao y hình,
                sẽ tiếp tục ủng hộ shop
              </Typography>
            </Box>
          </Box>
          <Box>
            <MoreVert sx={{ fontSize: 16 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemRateProduct;
