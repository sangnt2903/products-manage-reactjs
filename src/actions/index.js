import * as types from '../constants/actionsType';
import apiCaller from '../utils/apiCaller';
import products from '../reducers/products';

export const fetchAllProductsRequest = () => {
    return (dispatch) => {
        apiCaller('products', 'GET', null)
            .then(res => {
                dispatch(fetchAllProducts(res.data));
            })
    }
}

export const fetchAllProducts = (products) => {
    return {
        type: types.FETCH_ALL_PRODUCTS,
        products
    }
}

export const getProductRequest = (id) => {
    return dispatch => {
        return apiCaller(`products/${id}`, 'GET', null)
            .then(res => {
                dispatch(getProduct(res.data));
            })
    }
}

export const getProduct = (product) => {
    return {
        type: types.EDITING_PRODUCT,
        product
    }
}

export const addProductRequest = (product) => {
    return dispatch => {
        return apiCaller('products', 'POST', product)
            .then(res => {
                dispatch(addProduct(res.data));
            })
    }
}

export const addProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

export const updateProductRequest = (product) => {
    return dispatch => {
        return apiCaller(`products/${product.id}`, 'PUT', product)
            .then(res => {
                dispatch(updateProduct(res.data));
            })
    }
}

export const updateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}

export const deleteProductRequest = (id) => {
    return dispatch => {
        return apiCaller(`products/${id}`, 'DELETE', null)
            .then(res => {
                dispatch(deleteProduct(id));
            })
    }
}

export const deleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}