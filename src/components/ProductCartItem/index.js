import React from 'react';
import { useDispatch } from 'react-redux';
import {
  DeleteCartItem,
  PutChangeAmountCartItem,
} from '../../redux/actions/cartitems';
import { useSelector } from 'react-redux';
import { Box, Typography, InputBase, IconButton, Badge } from '@mui/material';
import useStyles from './styles';
import { Clear, Star, DeleteForeverOutlined } from '@mui/icons-material';
import colors from '../../lib/colors';
import ConvertVND from '../ConvertMoney/ConvertVND';

const ProductCartItem = (props) => {
  const classes = useStyles();

  const { data } = props;
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);

  const [amount, setAmount] = React.useState(data.amount);

  const increaseAmount = () => {
    setAmount(parseInt(amount) + 1);
    const datas = {
      amount: parseInt(amount) + 1,
      cart_id: cartList.data[0]._id,
    };
    dispatch(PutChangeAmountCartItem(data._id, datas));
  };
  const reduceAmount = () => {
    setAmount(parseInt(amount) - 1);
    const datas = {
      amount: parseInt(amount) - 1,
      cart_id: cartList.data[0]._id,
    };
    dispatch(PutChangeAmountCartItem(data._id, datas));
  };

  const deleteCartItem = (item) => {
    dispatch(DeleteCartItem(item, cartList.data[0]._id));
  };

  return (
    <tr className={classes.table_tr}>
      <td className={classes.table_td_img}>
        <img src={data?.product?.thumbnail} className={classes.img_product} />
      </td>
      <td className={classes.table_td_name}>
        <Typography variant="h3" className={classes.name_product_tb}>
          {data?.product.name}
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 500 }}>
          {data?.price}
        </Typography>
      </td>
      <td className={classes.table_td}>
        <Box className={classes.bx_change_amount}>
          <Box className={classes.bx_amount}>
            <Typography variant="subtitle1">{amount}</Typography>
          </Box>
          <Box>
            <Box
              className={classes.btn_change}
              sx={{ borderBottom: '1px solid rgba(0,0,0,.15)' }}
              onClick={() => increaseAmount()}
            >
              +
            </Box>
            <Box className={classes.btn_change} onClick={() => reduceAmount()}>
              -
            </Box>
          </Box>
        </Box>
      </td>

      <td className={classes.table_td}>
        <Typography variant="h3" color="text.secondary">
          {parseInt(amount) * parseInt(data?.price)}
        </Typography>
      </td>
      <td className={classes.table_td}>
        <DeleteForeverOutlined
          onClick={() => deleteCartItem(data._id)}
          sx={{
            fontSize: 24,
            color: colors.darkGray,
            cursor: 'pointer',
          }}
        />
      </td>
    </tr>
  );
};

export default ProductCartItem;
