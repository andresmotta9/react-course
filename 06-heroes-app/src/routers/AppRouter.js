import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ user.logged }
                    />

                    <PrivateRoute
                        isAuthenticated={ user.logged }
                        path="/" 
                        component={ DashboardRoutes }
                    />
                </Switch>
            </div>
        </Router>
    )
}
