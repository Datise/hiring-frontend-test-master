import {createElement, PropTypes} from 'react';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import {connect} from 'react-redux';
import {clear} from '../action/cart';
import * as products from '../data/items';
import Heading from './heading';
import Item from './item';
import styles from './styles.css';

const Cart = ({clear, total, items}) => {
  if (items.length === 0) {
    return (
      <div>
        <Heading>
          <img className={styles.headingImage} src={'img/cart_icon.png'}/>
          Cart
        </Heading>
        <h2>Your cart is empty.</h2>
      </div>
    );
  }
  return (
    <div>
      <Heading>
        <img className={styles.headingImage} src={'img/cart_icon.png'}/>
        Cart
      </Heading>
      <button onClick={clear}>Clear all items</button>
      <table className={styles.productTable} >
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
          <tr><td colSpan={3}/><td>${total}</td></tr>
        </tbody>
      </table>
    </div>
  );
};

Cart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  clear: PropTypes.func,
  total: PropTypes.number,
};
export default connect((state) => {
  return {
    items: state.cart.items,
    total: +(reduce(
      (sum, {id, quantity}) => sum + products[id].price * quantity,
      0,
      state.cart.items
    ).toFixed(2)),
  };
}, {clear})(Cart);
