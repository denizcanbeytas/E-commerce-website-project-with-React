import {combineReducers} from 'redux';
import shop from './shop.reducer';
import {paginationReducer} from "./pagination.reducer";

export default combineReducers({
    shop,
    pagination: paginationReducer
});
