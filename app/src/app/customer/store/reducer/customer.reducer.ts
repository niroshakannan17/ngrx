import { createReducer, on } from '@ngrx/store';
import { CustomerActions } from '../action/customer.actions.js';
import { Customer } from '../../../model/customer';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  customer:Customer[];
}

export const initialState: CustomerState = {
  customer:[]
};

export const reducer = createReducer(
  initialState,
  on(CustomerActions.addCustomers,(state:CustomerState,{customer})=>({
    ...state,
    customer:[...state.customer,customer]
  }))
);

