import { combineReducers } from 'redux';
import { cartReducer } from './cart.js'

export const rootReducer = combineReducers({
 cartReducer
}) 

//const rootReducer = (state, action) => {
//    cartReducer: cartReducer(state.cartReducer, action)
//} 