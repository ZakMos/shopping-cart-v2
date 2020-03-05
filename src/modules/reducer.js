import { combineReducers } from 'redux';
import { ACTIONS } from './constants';


function productsReducer (products = {}, action){
const {id} = action.product || {};
	// const { id } = product || {};
	const { product } = action;
	switch (action.type) {
		case ACTIONS.ADD_TO_CART:
		const inventory = product.inventory;
		if (inventory <= 0) return products;
			return {
				...products,
				[id]: {
					...products[id],
					inventory: inventory -1
				}
			};

		case ACTIONS.REMOVE_ITEM_FROM_CART:
			return {
				...products,
				[id]: {
					...products[id],
					inventory: products[id].inventory +1
				}
			};

		case ACTIONS.REMOVE_ALL_FROM_CART:
			return {
				...products,
				[id]:{
				...products[id],
				inventory: products[id].inventory + product.quantity
				}
			};
		default:return products;
	}
}

function cartReducer (oldCart = {}, action) {
	const { product } = action;
	const { id, title, sale, price, salePrice, img } = product || {};
	const cartItem = oldCart[id] || {id, title, sale, price, salePrice, img, quantity: 0};
	const newCart = {...oldCart};
	delete newCart[id];

	switch (action.type) {
		case ACTIONS.ADD_TO_CART:
			return {
			...oldCart,
					[id]:{
						...cartItem,
						quantity: cartItem.quantity + 1
					}
				}
		case ACTIONS.REMOVE_ITEM_FROM_CART:

			return cartItem.quantity <= 1
				?  newCart
				: {
						...oldCart,
						[id]: {
							...cartItem,
							quantity: cartItem.quantity -1
						}
			};

		case ACTIONS.REMOVE_ALL_FROM_CART:
			return newCart;

		case ACTIONS.CHECKOUT:
			return {};

		default:return oldCart;
	}
}
export const appReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer
});
