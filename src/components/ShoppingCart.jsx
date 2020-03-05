import React from 'react';
import { connect } from 'react-redux';
import { removeItem, removeAllItems, checkOut } from '../modules/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ShoppingCart = ({carts, removeItem, removeAllItems, checkOut}) => (
<section className="container content-section">
	<h2 className="section-header">CART</h2>
	<div className="cart-row">
		<span className="cart-item cart-header cart-column">ITEM</span>
		<span className="cart-price cart-header cart-column">PRICE</span>
		<span className="cart-quantity cart-header cart-column">QUANTITY</span>
	</div>
	<div className="cart-items">
	{carts.map(cart => (
		<div key={cart.id}>
			<div className="cart-row">
				<div className="cart-item cart-column">
					<img className="cart-item-image" src={cart.img} width="100" height="100" alt="productImage"/>
					<span className="cart-item-title">{cart.title}</span>
				</div>
					<span className="cart-price cart-column">{cart.sale === true ? cart.salePrice : cart.price}</span>
					<div className="cart=quantity cart-column">
						<span className="cart-quantity-input">{cart.quantity}</span>
						<span
						className="delete-icon"
						onClick={() => removeItem(cart)}
						type="button"><FontAwesomeIcon icon={faTrashAlt}  title="Remove One Item" size="1x"></FontAwesomeIcon> 1
						</span>
						<span
						onClick={() => removeAllItems(cart)}
						className="delete-icon"
						type="button"><FontAwesomeIcon className="" icon={faTrashAlt} title="Remove All Items" size="1x"></FontAwesomeIcon> All
						</span>
					</div>
			</div>
		</div>
		))}
		<div className="cart-total">
			<strong className="cart-total-title">Total</strong>
			<span className="cart-total-price">${carts.reduce((total, cart) => parseFloat((total + `${cart.sale === true ? cart.salePrice : cart.price}` * cart.quantity).toFixed(2)), 0)}</span>
		 </div>
		<button
			className="btn btn-primary btn-purchase"
			type="button"
			onClick={() => checkOut(carts)}
		>Checkout
		</button>
	</div>
</section>
);

const mapStoreProps = ({cart}) => ({
	carts: Object.values(cart)
});

const mapActionsProps = {
	checkOut: checkOut,
	removeItem: removeItem,
	removeAllItems: removeAllItems
};

export default connect(
  mapStoreProps,
	mapActionsProps

)(ShoppingCart);
