import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../modules/actions';

const ProductList = ({items, addToCart}) => (
  <div className="container">
    <div className="cards">
        {items.map(item => (
          <div className="card "key={item.id}>
            <p>
              {item.title}
            </p>
              <span>
              <img src={item.img} width= "200px" height= "200px" alt="productImage"/>
              </span>
            <p className="price">
            ${item.price} | {item.inventory }
            </p>
            <p className="salePrice" >
            {item.sale === true  ? `Sale Price = $${item.salePrice}` : <br/>}
            </p>

            <div className="button">
              <button
              className="product-button"
                onClick={() => addToCart(item)}
      					disabled={item.inventory > 0 ? '' : 'disabled'}
              >{item.inventory > 0 ? 'Add To Cart' : 'Sold Out'}
              </button>
            </div>
          </div>
        ))}
    </div>
  </div>
);

const mapStoreProps = ({products}) => ({
	items: Object.values(products)
});

const mapActionsProps = {
	addToCart: addToCart
};

export default connect(
  mapStoreProps,
	mapActionsProps

)(ProductList);
