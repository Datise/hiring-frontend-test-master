import {handleActions} from 'redux-actions';
import {CLEAR_ITEMS, ADD_ITEM, REMOVE_ITEM, SET_QUANTITY, SET_QUANTITY_OR_REMOVE} from 'action/types';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter'
export default handleActions({
  [CLEAR_ITEMS]: () => ({
    items: [],
  }),
  [REMOVE_ITEM]: (state, {payload: {id: target}}) => ({
    ...state,
    items: filter((item) => (
      item.id !== target
    ), state.items),
  }),
  [ADD_ITEM]: (state, {payload: id}) => ({
    ...state,
    items: [
      ...state.items,
      {id, quantity: 1},
    ],
  }),
  [SET_QUANTITY]: (state, {payload: {id: target, quantity}}) => ({
    ...state,
    items: map(({id, ...rest}) => (
      target === id ? {id, ...rest, quantity} : {id, ...rest}
    ), state.items)
  }),
  // [SET_QUANTITY_OR_REMOVE]: (state, {payload: {id: target, quantity}}) => (
  //   return (dispatch, getState) => {
  //     if(quantity < 1){
  //       store.dispatch({type: 'REMOVE_ITEM', id: id})
  //     }else{
  //       store.dispatch({type: 'SET_QUANTITY', getState(), payload})
  //     }
  //   }
  // ),
}, {
  items: [],
});
