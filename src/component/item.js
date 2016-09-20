import {createElement} from 'react';
import {connect} from 'react-redux';
import * as products from '../data/items';
import {removeItem, setQuantityOrRemove} from '../action/cart';
import styles from './styles.css';

const Item = ({setQuantityOrRemove, removeItem, id, quantity}) => {
  const {title, price} = products[id];
  const inc = () => setQuantityOrRemove({id, quantity: quantity + 1});
  const dec = () => setQuantityOrRemove({id, quantity: quantity - 1});
  const rem = () => removeItem({id});
  return (
    <tr>
      <td>
        {title}
        <img src={'img/remove_cart_item_icon.png'} onClick={rem} className={styles.removeItem} />
      </td>
      <td>
        ${price}
      </td>
      <td>
        <a className={styles.clickableIcon} onClick={inc}>+</a> 
        {quantity}
        <a className={styles.clickableIcon} onClick={dec}>-</a>
      </td>
      <td>
        ${price * quantity}
      </td>
    </tr>
  );
};

export default connect(() => ({}), {setQuantityOrRemove, removeItem})(Item);
