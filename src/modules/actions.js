import { ACTIONS } from './constants';


export const addToCart = (product) => ({
	type: ACTIONS.ADD_TO_CART,
	product
});

export const removeItem = (product) => ({
	type: ACTIONS.REMOVE_ITEM_FROM_CART,
   product
});

export const removeAllItems = (product) => ({
	type: ACTIONS.REMOVE_ALL_FROM_CART,
	product
});


export const checkOut = () => ({
	type: ACTIONS.CHECKOUT
});
