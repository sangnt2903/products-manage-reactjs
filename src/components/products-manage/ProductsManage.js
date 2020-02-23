import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import apiCaller from '../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { findIndex } from 'lodash';
import { fetchAllProductsRequest, deleteProductRequest } from '../../actions/index';
class ProductsManage extends Component {

    componentDidMount() {
        this.props.fetchAllProductsRequest();
    }

    onDelete = (id) => {
        this.props.deleteProductRequest(id);
    }

    render() {
        var { products } = this.props;
        const elmProducts = products.map((product, index) => {
            return (
                <ProductItem
                    key={index}
                    product={product}
                    onDelete={this.onDelete}
                />
            );
        });

        return (
            <div className="container">
                <div><Link type="button" to="products-manage/add" className="btn btn-info">Thêm sản phẩm</Link></div>
                <br />
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Danh sách sản phẩm</h3>
                    </div>
                    <div className="panel-body">
                        <div className="panel panel-default">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product Code</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {elmProducts}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProductsRequest: () => {
            dispatch(fetchAllProductsRequest());
        },
        deleteProductRequest: (id) => {
            dispatch(deleteProductRequest(id))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsManage);
