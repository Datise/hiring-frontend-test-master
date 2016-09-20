import {createElement} from 'react';
import {connect} from 'react-redux';
import * as products from '../data/items';
import {remove, setQuantityOrRemove} from '../action/cart';

const Item = ({setQuantityOrRemove, remove, id, quantity}) => {
  const {title, price} = products[id];
  const inc = () => setQuantityOrRemove({id, quantity: quantity + 1});
  const dec = () => setQuantityOrRemove({id, quantity: quantity - 1});
  const rem = () => remove({id});
  return (
    <tr>
      <td>
        {title}
        <img src={'/public/img/trashcan.png'} onClick={rem}/>
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

export default connect(() => ({}), {setQuantityOrRemove, remove})(Item);
