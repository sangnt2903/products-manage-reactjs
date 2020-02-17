import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';
import Product from './components/Product';

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
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;