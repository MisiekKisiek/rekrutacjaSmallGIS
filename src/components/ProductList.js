import React from 'react';

//Redux
import { useSelector } from 'react-redux';

//Components
import ProductItem from './ProductItem';

const ProductList = () => {

  const products = useSelector(state => state.products);

  const renderProducts = products.map(product => <ProductItem key={product.id} data={product} />)

  return (<ul className="product__list">
    {renderProducts}
  </ul>);
}

export default ProductList;