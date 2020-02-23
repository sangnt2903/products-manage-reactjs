import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductRequest, updateProductRequest, getProductRequest } from '../../actions/index';
class ProductActionPage extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            txtProductName: '',
            txtProductPrice: 0,
            txtProductStatus: false,
            onAdd: false // false : Edit, true : Add
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getProductRequest(id);
        } else {
            this.setState({
                onAdd: true
            });
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.editingProduct.id,
            txtProductName: nextProps.editingProduct.name,
            txtProductPrice: nextProps.editingProduct.price,
            txtProductStatus: nextProps.editingProduct.status,
            onAdd: false
        });

    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        var { id, txtProductName, txtProductPrice, txtProductStatus, onAdd } = this.state;
        var { history } = this.props;
        if (onAdd) {
            this.props.addProductRequest({
                name: txtProductName,
                price: txtProductPrice,
                status: txtProductStatus
            });
            history.goBack();
        } else {
            this.props.updateProductRequest({
                id: id,
                name: txtProductName,
                price: txtProductPrice,
                status: txtProductStatus
            });
            history.goBack();
        }

    }

    render() {
        var { txtProductName, txtProductPrice, txtProductStatus, onAdd } = this.state;

        return (
            <div className="container">
                <form action="" method="POST" role="form">
                    <legend>{onAdd ? 'Thêm sản phẩm' : 'Sửa sản phẩm'}</legend>
                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input type="text" name="txtProductName" className="form-control" value={txtProductName} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input type="number" name="txtProductPrice" className="form-control" value={txtProductPrice} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái</label>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" name="txtProductStatus" checked={txtProductStatus} onChange={this.onChange} />
                                Con hang
                            </label>
                        </div>

                    </div>

                    <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Lưu</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        editingProduct: state.editingProduct
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addProductRequest: (product) => {
            dispatch(addProductRequest(product));
        },
        updateProductRequest: (product) => {
            dispatch(updateProductRequest(product));
        },
        getProductRequest: (id) => {
            dispatch(getProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
