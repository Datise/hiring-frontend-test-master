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

export function setQuantityOrRemove(payload) {
  return function(dispatch) {
    if (payload.quantity < 1) {
      return dispatch(removeItem(payload));
    }
    return dispatch(setQuantity(payload));
  };
}
