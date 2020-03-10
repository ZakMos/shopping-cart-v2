import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../modules/actions';

const ProductList = ({items, addToCart}) => (
  <div className="container">
    <h2 className="section-header">Products</h2>
    <div className="item-cards">
        {items.map(item => (
          <div className="item-card "key={item.id}>
            <p className="item-title">{item.title}</p>
              <span>
                <img src={item.img} width= "200px" height= "200px" alt="productImage"/>
              </span>
              <div className="items-price-inventory">
                <p className={item.sale === true ?  "item-prisIfSale" : "item-price"}>
                €{item.price}
                </p>
                <span className="item-inventory"> {item.inventory }</span>
              </div>
            <p className={item.sale===true? "item-salePrice" : "item-salePrice-none"} >
            {item.sale === true  ? `Sale Price = €${item.salePrice}` : ""}
            </p>
            <div className="button">
              <button
                className="item-button"
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
