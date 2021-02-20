import {ShoppingItem} from '../models/shopping-item.model';
import {ShoppingAction, ShoppingActionTypes} from '../actions/shopping.actions';

const initialState: ShoppingItem[] = [
  {
    id: '1775935f-36fd-467e-a667-09f95b917f6d',
    name: 'Fanta',
  },
  {
    id: '1775935f-36fd-467e-1667-09f95b917f6d',
    name: 'Diet Coke',
  }
];

export function ShoppingReducer(state: ShoppingItem[] = initialState, action: ShoppingAction): ShoppingItem[] {
  switch (action.type) {

    case ShoppingActionTypes.ADD_ITEM: {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
}
