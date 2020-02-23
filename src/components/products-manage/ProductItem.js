import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Product extends Component {

    onDelete = (id) => {
        if (confirm("Are you delete item " + id + " ?")) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        const { product } = this.props;
        var classStatus = product.status ? 'warning' : 'danger';
        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><span className={`label label-${classStatus}`}>{product.status ? 'Còn hàng' : 'Hết hàng'}</span></td>
                <td>

                    <Link to={`/products-manage/${product.id}/edit`} className="btn btn-warning">Edit</Link>

                    <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Delete</button>
                </td>
            </tr>
        );
    }
}
export default Product;
