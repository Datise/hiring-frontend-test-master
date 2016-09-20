import {createElement} from 'react';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import {connect} from 'react-redux';
import {clear} from '../action/cart';
import * as products from '../data/items';
import Heading from './heading';
import Item from './item'

const Cart = ({clear, total, items}) => {
  if (items.length === 0) {
    return <h3>Your cart is empty</h3>;
  }
  return(
    <div>
      <Heading>Cart</Heading>
      <button onClick={clear}>Clear all items</button>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {map((item) => <Item {...item} key={item.id}/>, items)}
          <tr><td colSpan={3}/><td>TOTAL: {total}</td></tr>
        </tbody>
      </table>
    </div>
  )
};

export default connect((state) => {
  return {
    items: state.cart.items,
    total: reduce(
      (sum, {id, quantity}) => sum + products[id].price * quantity,
      0,
      state.cart.items
    ),
  };
}, {clear})(Cart);
