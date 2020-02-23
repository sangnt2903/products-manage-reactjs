import { combineReducers } from 'redux';
import products from './products';
import editingProduct from './editingProduct';

const reducers = combineReducers({
    products,
    editingProduct
});

export default reducers;