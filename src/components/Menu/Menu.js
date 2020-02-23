import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        label: "Trang chủ",
        to: "/",
        activeOnlyWhenExact: true
    },
    {
        label: "Giói thiệu",
        to: "/about",
        activeOnlyWhenExact: false
    },
    {
        label: "Sản phẩm",
        to: "/products",
        activeOnlyWhenExact: false
    },
    {
        label: "Liên lạc",
        to: "/contact",
        activeOnlyWhenExact: false
    },
    {
        label: "Quản lý sản phẩm",
        to: "/products-manage",
        activeOnlyWhenExact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link to={to}>
                        {label}
                    </Link>
                </li>
            )
        }} />
    );
}

class Menu extends Component {

    showMenu = (menus) => {
        if (menus.length > 0) {
            var result = null;
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.label} to={menu.to} activeOnlyWhenExact={menu.activeOnlyWhenExact} />
                )
            });

            return result;
        }
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </nav>
        );
    }
}

export default Menu;
