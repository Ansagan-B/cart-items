import {INCREASE_ITEM, DECREASE_ITEM, DELETE_ITEM, CANCEL_PROMO, TAB_SWITCH} from '../actions/cart.js';
import {recommendedItems, items} from '../initialData.js';

const initialState = {
  items: [items],
  recommendedItems: [recommendedItems],
  promoCode: '',
  promoDiscount: null,
  currentTab: 'items'
};

export const cartReducer = (state=initialState, action) => {
  switch (action.type) {
    case TAB_SWITCH:
      return {
        ...state, 
      currentTab: currentTab === items ? postponed : items
      };
    case INCREASE_ITEM:
      return { 
        ...state, 
        items: [...state.items].map(item =>item.id === action.id ? { ...item, qty: ++item.qty} : item)
        };
    case DECREASE_ITEM: 
      return { 
        ...state, 
        items: [...state.items].map(item =>item.id === action.id ? { ...item, qty: --item.qty} : item)
        };
    case DELETE_ITEM:
      return { ...state, items: [...state.items].filter(item => item.id !== action.id) };
    case CANCEL_PROMO:
      return 
        initialState.promoCode !== '' ? initialState.promoCode = '' : initialState.promoCode, 
        initialState.promoDiscount !== null ? initialState.promoDiscount = null : initialState.promoDiscount;
    default:
      return state
  }
} 