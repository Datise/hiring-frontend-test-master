import {createElement} from 'react';
import Product from './product';
import * as products from '../data/items';
import Heading from './heading';
import styles from './styles.css';
export default () => (
  <div>
    <Heading><img src={'img/products_icon.png'} className={styles.headingImage} />Products</Heading>
    <Product {...products.cake}/>
    <Product {...products.waffle}/>
    <Product {...products.chocolate}/>
  </div>
);
