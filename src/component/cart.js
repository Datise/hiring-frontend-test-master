import {createElement} from 'react';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import {connect} from 'react-redux';
import {clear} from '../action/cart';
import * as products from '../data/items';
import Heading from './heading';
import Item from './item'

const Cart = ({total, items}) => (
  <div>
    <Heading>Cart</Heading>
    <a onClick={clear}>Clear all items</a>
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
        {map((item) => <Item {...item}/>, items)}
        <tr><td colSpan={3}/><td>TOTAL: {total}</td></tr>
      </tbody>
    </table>
  </div>
);

export default connect((state) => {
  return {
    items: state.cart.items,
    total: reduce(
      (sum, {id, quantity}) => sum + products[id].price * quantity,
      0,
      state.cart.items
    ),
  };
})(Cart);
