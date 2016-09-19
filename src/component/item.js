import {createElement} from 'react';
import {connect} from 'react-redux';
import * as products from '../data/items';
import {setQuantity, remove} from '../action/cart';

//const Item = connect(() => ({}), {setQuantity, remove})(({id, quantity, setQuantity, remove}) => {
const Item = ({setQuantity, remove, id, quantity}) => {
  const {title, price} = products[id];
  const inc = () => setQuantity({id, quantity: quantity + 1});
  const dec = () => setQuantity({id, quantity: quantity - 1});
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

export default connect(() => ({}), {setQuantity, remove})(Item);