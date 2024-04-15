import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Customer } from '../../../model/customer';

export const CustomerActions = createActionGroup({
  source: 'Customer',
  events: {
    'Add Customers': (customer:Customer)=>({customer}),
    
    
  }
});
