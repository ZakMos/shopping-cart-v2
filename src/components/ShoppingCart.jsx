import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, removeAllItems, checkOut } from '../modules/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ShoppingCart = ({carts, addItem, removeItem, removeAllItems, checkOut}) => (
<section className="container content-section">
	<h2 className="section-header">CART</h2>
	<div className="cart-main-row">
		<span className="cart-header">ITEM</span>
		<span className="cart-header">PRICE</span>
		<span className="cart-header">QUANTITY</span>
	</div>
	{carts.map(cart => (
		<div key={cart.id}>
			<div className="cart-row">
				<div className="cart-item cart-column">
					<img className="cart-item-image" src={cart.img} width="100" height="100" alt="productImage"/>
					<span className="cart-item-title">{cart.title}</span>
				</div>
					<span className="cart-column">€{cart.sale === true ? cart.salePrice : cart.price}</span>
					<div className="cart-column">
					{/* <span
						className="delete-icon"
						onClick={() => addItem(cart)}
						disabled={cart.inventory >= 0 ? '' : 'disabled'}
              			>
						
							<FontAwesomeIcon icon={faPlusCircle}  
								title="Add One Item" 
								size="1x">
							</FontAwesomeIcon>
						</span> */}
						<span className="cart-quantity-input">{cart.quantity}</span>
						<span
						className="delete-icon"
						onClick={() => removeItem(cart)}
						type="button">
							<FontAwesomeIcon icon={faMinusCircle}  
								title="Remove One Item" 
								size="1x">
							</FontAwesomeIcon>
						</span>
						<span
						onClick={() => removeAllItems(cart)}
						className="delete-icon"
						type="button">
							<FontAwesomeIcon className="" icon={faTrashAlt} 
								title="Remove All Items" 
								size="1x">
							</FontAwesomeIcon>
						</span>
					</div>
			</div>
		</div>
		))}
		<div className="cart-total">
			<strong className="cart-total-title">Total</strong>
			<span className="cart-total-price">
				€{carts.reduce((total, cart) => parseFloat((total + `${cart.sale === true ? cart.salePrice : cart.price}` * cart.quantity).toFixed(2)), 0)}</span>
		 </div>
		<button
			className="btn btn-primary"
			type="button"
			onClick={() => checkOut(carts)}
		>Checkout
		</button>
</section>
);

const mapStoreProps = ({cart}) => ({
	carts: Object.values(cart)
});

const mapActionsProps = {
	checkOut: checkOut,
	addItem: addItem,
	removeItem: removeItem,
	removeAllItems: removeAllItems
};

export default connect(
  mapStoreProps,
	mapActionsProps

)(ShoppingCart);
