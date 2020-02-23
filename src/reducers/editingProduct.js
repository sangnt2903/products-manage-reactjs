import * as types from '../constants/actionsType';
import { findIndex } from 'lodash';
var initialState = {};

const editingProduct = (state = initialState, action) => {
    switch (action.type) {
        case types.EDITING_PRODUCT:
            state = action.product;
            return state;
        default:
            return state;
    }
}

export default editingProduct;