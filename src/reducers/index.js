import { combineReducers } from 'redux';
import auth from './authedUser';
import favorites from './favorites';
import restaurant from './restaurant';
import order from './order';
import address from './address';

export default combineReducers({
    auth,
    favorites,
    restaurant,
    order,
    address
});