import {createElement} from 'react';
import Product from './product';
import * as products from '../data/items';
import Heading from './heading';
import styles from './styles.css';
import map from 'lodash/fp/map';
export default () => (
  <div>
    <Heading><img src={'img/products_icon.png'} className={styles.headingImage} />Products</Heading>
    {map((product) => <Product {...product} key={product.id}/>, products)}
  </div>
);
