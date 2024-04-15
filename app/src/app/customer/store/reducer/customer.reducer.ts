import { createReducer, on } from '@ngrx/store';
import { CustomerActions } from '../action/customer.actions.js';
import { Customer } from '../../../model/customer';

export const customerFeatureKey = 'customer';

export interface State {
  customer:Customer[];
}

export const initialState: State = {
  customer:[]
};

export const reducer = createReducer(
  initialState,
  on(CustomerActions.addCustomers,(state:State,{customer})=>({
    ...state,
    customer:[...state.customer,customer]
  }))
);

