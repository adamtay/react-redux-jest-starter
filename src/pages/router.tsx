import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, RouteProps } from 'react-router-dom';
import App from './App/App';

const routes: RouteProps[] = [{ path: '/', component: App }];

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Switch>
                {routes.map(routeProps => (
                    <Route key={routeProps.path as string} {...routeProps} />
                ))}
            </Switch>
            <Redirect to="/" />
        </Router>
    );
};

export default AppRouter;
