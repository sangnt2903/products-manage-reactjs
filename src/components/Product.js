import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NotFound from './NotFound';
import { findIndex } from 'lodash';
class Product extends Component {
    render() {
        var products = [
            {
                id: 1,
                slug: "iphone",
                name: "Iphone Xs Plus",
                price: 1000
            },
            {
                id: 2,
                slug: "samsung",
                name: "Samsung galaxy S10",
                price: 800
            },
            {
                id: 3,
                slug: "oppo",
                name: "Oppo F1s",
                price: 500
            }
        ];
        var { match } = this.props;
        if (match.params) {
            var index = findIndex(products, ["slug", match.params.slug]);
            if (index !== -1) {
                return (
                    <div>
                        Chi tiết sản phẩm : {match.params.slug}
                    </div>
                );
            } else {
                return <NotFound />;
            }
        }
    }
}
export default Product;
