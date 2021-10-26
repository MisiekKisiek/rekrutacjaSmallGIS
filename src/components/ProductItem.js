import React from 'react';

const ProductItem = ({ data }) => {

  const { description, img, name, price } = data;

  const image = require(`../data/${img}`);


  return (<li className="product__item">
    <div className="product__item-wrap">
      <div className="product__item-image">
        <img src={image.default} alt={`Produkt ${name}`} />
      </div>
      <h2 className="product__item-name">
        <span>{name}</span>
      </h2>
      <span className="product__item-price">
        {price}
      </span>
      <span className="product__item-desc">
        {description}
      </span>
    </div>
  </li>);
}

export default ProductItem;