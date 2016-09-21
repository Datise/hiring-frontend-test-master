import {ADD_ITEM, REMOVE_ITEM, SET_QUANTITY, CLEAR_ITEMS} from './types';
import {createAction} from 'redux-actions';

export const addItem = createAction(ADD_ITEM);
export const removeItem = createAction(REMOVE_ITEM);
export const setQuantity = createAction(SET_QUANTITY);
export const clear = createAction(CLEAR_ITEMS);

export function add(payload) {
  return function(dispatch, getState) {
    const items = getState().cart.items;
    const existingItem = items.find((o) => o.id === payload);
    if (existingItem === undefined) {
      return dispatch(addItem(payload));
    }
    const quantity = items.find((o) => o.id === payload).quantity + 1;
    return dispatch(setQuantity({id: payload, quantity: quantity}));
  };
}

// Can't decide if this function should handle a user prompt to let them know setting
// an item to 0 removes an item from the cart
// definitely a better/necessary UX but any direction I can think of seems like it would take
// too much boilerplate for such a simple thing (Can add it directly in the view would be the least
// amount of code but potentially in the worst place.)
export function setQuantityOrRemove(payload) {
  return function(dispatch) {
    if (payload.quantity < 1) {
      return dispatch(removeItem(payload));
    }
    return dispatch(setQuantity(payload));
  };
}
