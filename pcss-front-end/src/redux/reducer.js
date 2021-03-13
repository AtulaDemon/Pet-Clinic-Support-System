import { CUSTOMERS } from '../shared/customers';
import { SERVICES } from '../shared/services';
import { SERVICETYPES } from '../shared/servicetypes';
import { WEIGHTTYPES } from '../shared/weighttypes';

export const initialState = {
    customers: CUSTOMERS,
    services: SERVICES,
    servicetypes: SERVICETYPES,
    weighttypes: WEIGHTTYPES
};

export const Reducer = (state = initialState, action) => {
    return state;
};