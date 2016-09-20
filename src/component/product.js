import {createElement, PropTypes} from 'react';
import {add} from '../action/cart';
import {connect} from 'react-redux';
import styles from './styles.css';

const Product = ({add, id, title, image}) => (
  <div className={styles.product} onClick={() => add(id)}>
    <img src={image} alt={title} className={styles.productImage}/>
    <h4 className={styles.productTitle}>{title}</h4>
  </div>
);

Product.propTypes = {
  add: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string
}
export default connect(() => ({}), {add})(Product);
