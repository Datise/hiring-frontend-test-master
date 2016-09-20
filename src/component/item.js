import {createElement} from 'react';
import {connect} from 'react-redux';
import * as products from '../data/items';
import {removeItem, setQuantityOrRemove} from '../action/cart';

const Item = ({setQuantityOrRemove, removeItem, id, quantity}) => {
  const {title, price} = products[id];
  const inc = () => setQuantityOrRemove({id, quantity: quantity + 1});
  const dec = () => setQuantityOrRemove({id, quantity: quantity - 1});
  const rem = () => removeItem({id});
  return (
    <tr>
      <td>
        {title}
        <img src={'img/remove_cart_item_icon.png'} onClick={rem} className='remove-item'/>
      </td>
      <td>
        {price}
      </td>
      <td>
        {quantity}
        <a onClick={inc}>+</a> <a onClick={dec}>-</a>
      </td>
      <td>
        {price * quantity}
      </td>
    </tr>
  );
};

export default connect(() => ({}), {setQuantityOrRemove, removeItem})(Item);
