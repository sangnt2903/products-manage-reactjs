import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products/Products';
import Product from './components/Products/Product';
import ProductsManage from './components/products-manage/ProductsManage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/products',
        exact: true,
        main: ({ match }) => <Products match={match} />
    },
    {
        path: '/products/:slug',
        exact: false,
        main: ({ match }) => <Product match={match} />
    },
    {
        path: '/products-manage',
        exact: true,
        main: ({ match }) => <ProductsManage match={match} />
    },
    {
        path: '/products-manage/add',
        exact: false,
        main: ({ history }) => <ProductActionPage history={history} />
    },
    {
        path: '/products-manage/:id/edit',
        exact: false,
        main: ({ match, history }) => <ProductActionPage match={match} history={history} />
    },
    {
        path: '/products-manage/:id/delete',
        exact: false,
        main: () => <ProductActionPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;