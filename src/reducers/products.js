import * as types from '../constants/actionsType';
import { findIndex } from 'lodash';
var initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_PRODUCTS:
            state = action.products;
            return [...state];
        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case types.UPDATE_PRODUCT:
            var index = findIndex(state, ['id', action.product.id]);
            if (index !== -1) {
                var productUpdated = action.product;
                state[index] = productUpdated;
            }
            return state;
        case types.DELETE_PRODUCT:
            var index = findIndex(state, ['id', action.id]);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        default:
            return [...state];
    }
}

export default products;