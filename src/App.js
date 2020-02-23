import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routes from './route';
import Menu from './components/Menu/Menu';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    {/* Nội dung */}
                    <Switch>
                        {this.showContenMenus(routes)}
                    </Switch>
                </div>
            </Router>
        );
    }

    showContenMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                );
            });
        }
        return result;
    }
}
export default App;

